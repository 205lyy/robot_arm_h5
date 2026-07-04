/* ============================================
 * 六轴机械臂科普H5 - 答题闯关模块
 * 函数前缀：quiz_
 * 功能：题目渲染、答题逻辑、结果统计
 * ============================================ */

/**
 * 答题状态变量
 */
var quiz_state = {
    currentQuestionIndex: 0,
    isAnswered: false,
    correctCount: 0,
    isSummaryShown: false
};

/**
 * 原始答题框HTML结构（用于恢复）
 */
var quiz_originalHTML = null;

/**
 * 初始化答题页面
 * @description 进入答题闯关页时调用
 */
function quiz_init() {
    quiz_state.currentQuestionIndex = 0;
    quiz_state.isAnswered = false;
    quiz_state.correctCount = 0;
    quiz_state.isSummaryShown = false;
    
    // 重新随机抽取5道题目，确保每次进入答题页题目都不同
    if (typeof quiz_shuffleAndSelect === 'function') {
        quiz_database = quiz_shuffleAndSelect(5);
    }
    
    // 恢复原始DOM结构（如果被总结页面替换）
    var quizBox = document.getElementById('quiz-box');
    if (quiz_originalHTML && quiz_state.isSummaryShown) {
        quizBox.innerHTML = quiz_originalHTML;
        quiz_state.isSummaryShown = false;
    }
    
    // 渲染第一题
    quiz_renderQuestion();
}

/**
 * 渲染题目
 * @description 根据当前索引渲染题目内容
 */
function quiz_renderQuestion() {
    // 获取题目数据
    var question = quiz_database[quiz_state.currentQuestionIndex];
    
    // 获取DOM元素
    var questionElement = document.getElementById('quiz-question');
    var optionsElement = document.getElementById('quiz-options');
    var progressElement = document.getElementById('quiz-progress');
    var cardElement = document.getElementById('quiz-card');
    var nextBtn = document.getElementById('quiz-next-btn');
    
    if (!question || !questionElement || !optionsElement) {
        console.error('答题元素未找到');
        return;
    }
    
    // 更新题目内容
    questionElement.textContent = question.question;
    
    // 更新进度
    progressElement.textContent = (quiz_state.currentQuestionIndex + 1) + ' / ' + quiz_database.length;
    
    // 清空并渲染选项
    optionsElement.innerHTML = '';
    question.options.forEach(function(option, index) {
        var optionBtn = document.createElement('button');
        optionBtn.className = 'quiz-option';
        optionBtn.textContent = option;
        optionBtn.onclick = function() {
            quiz_selectOption(index);
        };
        optionsElement.appendChild(optionBtn);
    });
    
    // 隐藏解析卡片
    cardElement.classList.remove('show', 'correct', 'wrong');
    
    // 隐藏下一题按钮
    nextBtn.style.display = 'none';
    
    // 重置答题状态
    quiz_state.isAnswered = false;
}

/**
 * 选择答案
 * @param {number} selectedIndex - 用户选择的答案索引
 * @description 处理用户答题，判断对错并显示解析
 */
function quiz_selectOption(selectedIndex) {
    // 如果已经作答，禁止重复选择
    if (quiz_state.isAnswered) return;
    
    quiz_state.isAnswered = true;
    
    // 获取题目数据
    var question = quiz_database[quiz_state.currentQuestionIndex];
    
    // 获取DOM元素
    var options = document.querySelectorAll('.quiz-option');
    var cardElement = document.getElementById('quiz-card');
    var nextBtn = document.getElementById('quiz-next-btn');
    
    // 禁用所有选项
    options.forEach(function(option) {
        option.classList.add('disabled');
    });
    
    // 标记正确答案和用户选择
    options.forEach(function(option, index) {
        if (index === question.answer) {
            option.classList.add('correct');
        }
        if (index === selectedIndex && index !== question.answer) {
            option.classList.add('wrong');
        }
    });
    
    // 判断答题结果
    if (selectedIndex === question.answer) {
        quiz_state.correctCount++;
        cardElement.className = 'quiz-card show correct';
        cardElement.innerHTML = 
            '<div class="quiz-card-title">回答正确！</div>' +
            '<div class="quiz-card-text">' + question.explanation + '</div>';
    } else {
        cardElement.className = 'quiz-card show wrong';
        cardElement.innerHTML = 
            '<div class="quiz-card-title">回答错误</div>' +
            '<div class="quiz-card-text">' + question.explanation + '</div>';
    }
    
    // 显示下一题按钮
    nextBtn.style.display = 'block';
    
    // 更新按钮文字
    if (quiz_state.currentQuestionIndex === quiz_database.length - 1) {
        nextBtn.textContent = '完成答题，查看安徽智造';
    } else {
        nextBtn.textContent = '下一题';
    }
}

/**
 * 下一题
 * @description 切换到下一题或显示答题总结
 */
function quiz_nextQuestion() {
    // 如果未作答，禁止切换
    if (!quiz_state.isAnswered) return;
    
    // 如果是最后一题，显示总结
    if (quiz_state.currentQuestionIndex >= quiz_database.length - 1) {
        quiz_showSummary();
    } else {
        // 切换到下一题
        quiz_state.currentQuestionIndex++;
        quiz_renderQuestion();
    }
}

/**
 * 显示答题总结
 * @description 显示答题完成后的总结页面
 */
function quiz_showSummary() {
    // 保存原始HTML结构（用于恢复）
    var quizBox = document.getElementById('quiz-box');
    if (!quiz_originalHTML) {
        quiz_originalHTML = quizBox.innerHTML;
    }
    
    // 计算正确率
    var accuracy = Math.round((quiz_state.correctCount / quiz_database.length) * 100);
    
    // 获取评价
    var evaluation = accuracy >= 80 ? '优秀' : accuracy >= 60 ? '良好' : '继续加油';
    var icon = accuracy >= 80 ? '🏆' : accuracy >= 60 ? '👍' : '💪';
    
    // 生成总结HTML
    var summaryHTML = 
        '<div class="quiz-summary">' +
        '<div class="quiz-summary-icon">' + icon + '</div>' +
        '<div class="quiz-summary-title">答题完成！</div>' +
        '<div class="quiz-summary-text">你已完成所有题目，表现' + evaluation + '！</div>' +
        '<div class="quiz-summary-score">' + accuracy + '%</div>' +
        '<div class="quiz-summary-text">正确：' + quiz_state.correctCount + '/' + quiz_database.length + ' 题</div>' +
        '<button class="btn-secondary quiz-retry-btn" onclick="quiz_init()">重新答题</button>' +
        '</div>';
    
    // 更新内容
    quizBox.innerHTML = summaryHTML;
    quiz_state.isSummaryShown = true;
    
    // 更新按钮
    var nextBtn = document.getElementById('quiz-next-btn');
    nextBtn.textContent = '前往安徽智造';
    nextBtn.style.display = 'block';
    nextBtn.onclick = function() {
        changePage(5);
    };
}