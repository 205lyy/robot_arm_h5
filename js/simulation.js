/* ============================================
 * 六轴机械臂科普H5 - 工业仿真演示模块
 * 函数前缀：sim_
 * 功能：视频播放、答题时间节点检测、弹窗控制
 * ============================================ */

/**
 * 仿真配置数据
 */
var sim_config = {
    useExternalVideos: false,
    externalVideoUrls: [
        '',
        '',
        ''
    ],
    videoUrls: [
        'video/video_joint.mp4',
        'video/video_work.mp4',
        'video/video_overview.mp4'
    ],
    
    videoLabels: [
        '单关节演示',
        '完整工作流程',
        '多角度展示'
    ],
    
    quizTimestamps: [
        {
            time: 5,
            question: '机械臂的底座主要作用是什么？',
            options: ['旋转关节', '支撑整个机械臂', '抓取物体', '控制姿态'],
            answer: 1,
            explanation: '底座是机械臂的基础支撑部分，承载整个机械臂的重量，保证运动时的稳定性。'
        },
        {
            time: 12,
            question: '机械臂的第2轴（肩部）主要实现什么运动？',
            options: ['旋转运动', '前后俯仰', '左右平移', '上下升降'],
            answer: 1,
            explanation: '肩部关节通常是俯仰关节，可以使机械臂前后摆动，扩大工作范围。'
        },
        {
            time: 20,
            question: '机械臂末端执行器的作用是什么？',
            options: ['控制速度', '抓取和操作物体', '检测温度', '显示状态'],
            answer: 1,
            explanation: '末端执行器是机械臂的"手"，可以是夹爪、吸盘、喷枪等工具，用于直接操作物体。'
        }
    ]
};

/**
 * 仿真状态变量
 */
var sim_state = {
    currentVideoIndex: 0,
    videoElement: null,
    isQuizActive: false,
    currentQuizIndex: 0,
    isInitialized: false
};

/**
 * 初始化仿真页面
 * @description 进入仿真演示页时调用
 */
function sim_init() {
    if (sim_state.isInitialized) return;
    
    sim_state.videoElement = document.getElementById('sim-video');
    if (!sim_state.videoElement) {
        console.error('视频元素未找到');
        showToast('视频播放器初始化失败');
        return;
    }
    
    sim_state.videoElement.addEventListener('error', sim_handleVideoError);
    sim_state.videoElement.addEventListener('timeupdate', sim_checkQuizTimestamp);
    sim_state.videoElement.addEventListener('loadedmetadata', sim_hidePlaceholder);
    
    document.addEventListener('visibilitychange', sim_handleVisibilityChange);
    
    sim_state.isInitialized = true;
    
    sim_switchVideo(0);
}

/**
 * 切换视频源
 * @param {number} index - 视频索引(0-2)
 * @description 切换到指定的视频
 */
function sim_switchVideo(index) {
    if (index < 0 || index >= sim_config.videoUrls.length) {
        showToast('无效的视频索引');
        return;
    }
    
    sim_state.currentVideoIndex = index;
    
    var buttons = document.querySelectorAll('.sim-tab-btn');
    buttons.forEach(function(btn, i) {
        if (i === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    if (sim_state.videoElement) {
        sim_state.videoElement.pause();
        
        var source = sim_state.videoElement.querySelector('source');
        if (source) {
            var url = sim_config.useExternalVideos && sim_config.externalVideoUrls[index] 
                ? sim_config.externalVideoUrls[index] 
                : sim_config.videoUrls[index];
            source.src = url + '?v=' + Date.now();
        }
        
        sim_state.currentQuizIndex = 0;
        sim_state.isQuizActive = false;
        
        sim_state.videoElement.load();
    }
}

/**
 * 暂停视频
 * @description 暂停当前播放的视频
 */
function sim_pauseVideo() {
    if (sim_state.videoElement && !sim_state.videoElement.paused) {
        sim_state.videoElement.pause();
    }
}

/**
 * 显示视频占位符
 * @description 视频加载失败或尚未添加时显示占位符
 */
function sim_showPlaceholder() {
    if (!sim_state.videoElement) return;
    
    var wrapper = document.querySelector('.sim-video-wrapper');
    if (wrapper) {
        sim_state.videoElement.style.display = 'none';
        
        var placeholder = document.querySelector('.sim-placeholder');
        if (placeholder) {
            placeholder.style.display = 'flex';
        }
    }
}

/**
 * 隐藏视频占位符
 * @description 视频加载成功后隐藏占位符
 */
function sim_hidePlaceholder() {
    if (!sim_state.videoElement) return;
    
    var placeholder = document.querySelector('.sim-placeholder');
    if (placeholder) {
        sim_state.videoElement.style.display = 'block';
        placeholder.style.display = 'none';
    }
}

/**
 * 视频加载错误处理
 * @param {Event} event - 错误事件
 */
function sim_handleVideoError(event) {
    console.error('视频加载错误:', event);
    sim_showPlaceholder();
}

/**
 * 页面可见性变化处理
 * @description 页面不可见时暂停视频
 */
function sim_handleVisibilityChange() {
    if (document.hidden) {
        sim_pauseVideo();
    }
}

/**
 * 检查答题时间节点
 * @description 视频播放时检测是否到达答题时间点
 */
function sim_checkQuizTimestamp() {
    // 如果不是单关节演示视频，跳过答题检测
    if (sim_state.currentVideoIndex !== 0) return;
    
    // 如果正在答题中，跳过
    if (sim_state.isQuizActive) return;
    
    // 如果已经完成所有答题，跳过
    if (sim_state.currentQuizIndex >= sim_config.quizTimestamps.length) return;
    
    // 获取当前播放时间
    var currentTime = sim_state.videoElement.currentTime;
    var quizData = sim_config.quizTimestamps[sim_state.currentQuizIndex];
    
    // 检测是否到达答题时间节点（误差范围0.5秒）
    if (currentTime >= quizData.time && currentTime < quizData.time + 0.5) {
        sim_showQuiz(quizData);
    }
}

/**
 * 显示答题弹窗
 * @param {Object} quizData - 答题数据
 * @description 创建并显示答题弹窗，暂停视频
 */
function sim_showQuiz(quizData) {
    sim_state.isQuizActive = true;
    
    // 暂停视频
    if (sim_state.videoElement) {
        sim_state.videoElement.pause();
    }
    
    // 创建答题弹窗HTML
    var html = '<div class="sim-quiz-overlay" id="sim-quiz-overlay">' +
        '<div class="sim-quiz-modal">' +
        '<div class="sim-quiz-question">' + quizData.question + '</div>' +
        '<div class="sim-quiz-options">';
    
    quizData.options.forEach(function(opt, index) {
        var escapedExplanation = quizData.explanation.replace(/'/g, "\\'").replace(/"/g, '\\"');
        html += '<div class="sim-quiz-option" data-index="' + index + '" onclick="sim_selectAnswer(' + index + ', ' + quizData.answer + ', \'' + escapedExplanation + '\', this)">' + opt + '</div>';
    });
    
    html += '</div>' +
        '<div class="sim-quiz-card" id="sim-quiz-card">' +
        '<div class="sim-quiz-card-title" id="sim-quiz-card-title"></div>' +
        '<div class="sim-quiz-card-text" id="sim-quiz-card-text"></div>' +
        '</div>' +
        '<button class="sim-quiz-btn" id="sim-quiz-btn" style="display:none;" onclick="sim_closeQuiz()">继续播放</button>' +
        '</div>' +
        '</div>';
    
    // 添加到页面
    document.body.insertAdjacentHTML('beforeend', html);
}

/**
 * 选择答题答案
 * @param {number} selectedIndex - 用户选择的答案索引
 * @param {number} correctAnswer - 正确答案索引
 * @param {string} explanation - 解析文案
 * @param {HTMLElement} element - 点击的选项元素
 */
function sim_selectAnswer(selectedIndex, correctAnswer, explanation, element) {
    // 获取所有选项
    var options = document.querySelectorAll('.sim-quiz-option');
    
    // 禁用所有选项
    options.forEach(function(opt) {
        opt.style.pointerEvents = 'none';
    });
    
    // 标记正确答案和用户选择
    options.forEach(function(opt, index) {
        if (index === correctAnswer) {
            opt.classList.add('correct');
        }
        if (index === selectedIndex && index !== correctAnswer) {
            opt.classList.add('wrong');
        }
    });
    
    // 显示解析卡片
    var card = document.getElementById('sim-quiz-card');
    var cardTitle = document.getElementById('sim-quiz-card-title');
    var cardText = document.getElementById('sim-quiz-card-text');
    
    if (selectedIndex === correctAnswer) {
        cardTitle.textContent = '回答正确！';
        cardTitle.style.color = '#22c55e';
    } else {
        cardTitle.textContent = '回答错误';
        cardTitle.style.color = '#ef4444';
    }
    cardText.textContent = explanation;
    card.classList.add('show');
    
    // 显示继续按钮
    var btn = document.getElementById('sim-quiz-btn');
    btn.style.display = 'block';
    
    // 更新答题索引
    sim_state.currentQuizIndex++;
}

/**
 * 关闭答题弹窗
 * @description 移除弹窗，继续播放视频
 */
function sim_closeQuiz() {
    // 移除弹窗
    var overlay = document.getElementById('sim-quiz-overlay');
    if (overlay) {
        overlay.remove();
    }
    
    sim_state.isQuizActive = false;
    
    // 继续播放视频
    if (sim_state.videoElement) {
        sim_state.videoElement.play().catch(function(err) {
            // 自动播放被阻止时不报错
            console.log('视频播放被阻止，请手动点击播放');
        });
    }
}