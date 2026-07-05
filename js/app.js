/* ============================================
 * 六轴机械臂科普H5 - 全局核心函数
 * 包含：changePage、goToStandalone、showToast
 * ============================================ */

/**
 * 全局状态变量
 */
var app = {
    currentPageIndex: 0,
    isTransitioning: false,
    pageIds: [
        'page-home',
        'page-animation',
        'page-simulation',
        'page-knowledge',
        'page-quiz',
        'page-anhui',
        'page-end'
    ]
};

/**
 * 切换页面函数
 * @param {number} targetIndex - 目标页面索引(0-6)
 * @description 带动画过渡效果，切换到指定页面
 */
function changePage(targetIndex) {
    // 防止重复切换
    if (app.isTransitioning) return;
    
    // 边界检查
    if (targetIndex < 0 || targetIndex >= app.pageIds.length) {
        showToast('无效的页面索引');
        return;
    }
    
    // 如果目标页面与当前页面相同，不执行切换
    if (targetIndex === app.currentPageIndex) return;
    
    app.isTransitioning = true;
    
    var currentPage = document.getElementById(app.pageIds[app.currentPageIndex]);
    var targetPage = document.getElementById(app.pageIds[targetIndex]);
    
    // 如果离开动画页，暂停SVG动画
    if (app.currentPageIndex === 1 && typeof anim_pause === 'function') {
        anim_pause();
    }
    if (app.currentPageIndex === 2 && typeof sim_pauseVideo === 'function') {
        sim_pauseVideo();
    }
    
    // 先显示目标页面（覆盖当前页面）
    targetPage.classList.add('active');
    app.currentPageIndex = targetIndex;
    
    // 调用页面初始化函数
    initPage(targetIndex);
    
    // 延迟后隐藏当前页面
    setTimeout(function() {
        currentPage.classList.remove('active');
        
        // 恢复可切换状态
        setTimeout(function() {
            app.isTransitioning = false;
        }, 400);
    }, 100);
}

/**
 * 页面初始化函数
 * @param {number} pageIndex - 页面索引
 * @description 进入页面时执行的初始化逻辑
 */
function initPage(pageIndex) {
    try {
        switch(pageIndex) {
            case 1:
                // 动画演示页
                if (typeof anim_init === 'function') {
                    anim_init();
                }
                if (typeof anim_resume === 'function') {
                    anim_resume();
                }
                break;
            case 2:
                // 仿真演示页
                if (typeof sim_init === 'function') {
                    sim_init();
                }
                break;
            case 3:
                // 知识讲解页
                if (typeof knowledge_init === 'function') {
                    knowledge_init(0);
                }
                break;
            case 4:
                // 答题闯关页
                if (typeof quiz_init === 'function') {
                    quiz_init();
                }
                break;
            case 5:
                // 安徽智造页
                if (typeof anhui_init === 'function') {
                    anhui_init(0);
                }
                break;
            default:
                break;
        }
    } catch (error) {
        console.error('页面初始化错误:', error);
        showToast('页面初始化失败');
    }
}

/**
 * 跳转到独立全屏视频页
 * @param {string} url - 视频地址
 * @description 备用功能，用于特殊场景下跳转到全屏视频播放页面
 */
function goToStandalone(url) {
    if (!url) {
        showToast('视频地址无效');
        return;
    }
    
    try {
        // 创建独立窗口打开视频
        var standaloneWindow = window.open(url, '_blank', 'fullscreen=yes,menubar=no,toolbar=no,location=no,status=no');
        
        if (!standaloneWindow) {
            // 如果弹窗被阻止，使用当前页面播放
            showToast('无法打开新窗口，将在当前页面播放');
            var videoElement = document.querySelector('video');
            if (videoElement) {
                videoElement.src = url;
                videoElement.play().catch(function() {
                    showToast('请点击视频播放');
                });
            }
        }
    } catch (error) {
        console.error('跳转到独立页面失败:', error);
        showToast('无法打开视频页面');
    }
}

/**
 * 显示Toast提示
 * @param {string} message - 提示文案
 * @param {number} duration - 显示时长（毫秒），默认为2000
 * @description 轻量级提示信息，自动消失
 */
function showToast(message, duration) {
    // 默认显示时长
    var showDuration = duration || 2000;
    
    // 获取或创建Toast容器
    var container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    
    // 创建Toast元素
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    
    // 显示Toast
    setTimeout(function() {
        toast.classList.add('show');
    }, 10);
    
    // 自动隐藏
    setTimeout(function() {
        toast.classList.remove('show');
        setTimeout(function() {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, showDuration);
}

/**
 * 页面加载完成后的初始化
 */
function app_init() {
    try {
        document.getElementById(app.pageIds[0]).classList.add('active');
        
        document.addEventListener('backbutton', function() {
            if (app.currentPageIndex > 0) {
                changePage(app.currentPageIndex - 1);
            }
        }, false);
        
        document.addEventListener('popstate', function() {
            if (app.currentPageIndex > 0) {
                changePage(app.currentPageIndex - 1);
            }
        });
        
        console.log('六轴机械臂科普H5加载完成');
    } catch (error) {
        console.error('页面初始化失败:', error);
        showToast('页面加载失败，请刷新重试');
    }
}

if (document.readyState === 'complete') {
    app_init();
} else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', app_init);
    window.addEventListener('load', app_init);
} else if (document.attachEvent) {
    document.attachEvent('onreadystatechange', function() {
        if (document.readyState === 'complete') {
            app_init();
        }
    });
    window.attachEvent('onload', app_init);
}

/**
 * 页面可见性变化处理
 * @description 离开页面时暂停视频等消耗资源的操作
 */
function app_handleVisibilityChange() {
    if (document.hidden || document.msHidden || document.webkitHidden) {
        if (app.currentPageIndex === 1 && typeof anim_pause === 'function') {
            anim_pause();
        }
        if (app.currentPageIndex === 2 && typeof sim_pauseVideo === 'function') {
            sim_pauseVideo();
        }
    }
}

document.addEventListener('visibilitychange', app_handleVisibilityChange);
document.addEventListener('webkitvisibilitychange', app_handleVisibilityChange);
document.addEventListener('msvisibilitychange', app_handleVisibilityChange);

/**
 * 全局错误处理
 * @description 捕获未处理的错误，避免页面崩溃
 */
window.onerror = function(message, source, lineno, colno, error) {
    console.error('全局错误:', message, '文件:', source, '行:', lineno, '列:', colno, error);
    return true;
};

window.addEventListener('unhandledrejection', function(event) {
    console.error('未处理的Promise拒绝:', event.reason);
    event.preventDefault();
});

/**
 * 触摸事件处理（防止移动端双击缩放）
 */
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchmove', function(event) {
    var target = event.target;
    while (target) {
        if (target.classList && (target.classList.contains('page-content') || target.classList.contains('sim-quiz-overlay'))) {
            return;
        }
        if (target.tagName === 'HTML' || target.tagName === 'BODY') {
            break;
        }
        target = target.parentNode;
    }
    event.preventDefault();
}, { passive: false });

/**
 * 键盘事件处理（Android返回键）
 */
if (typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Android') > -1) {
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 27) {
            if (app.currentPageIndex > 0) {
                changePage(app.currentPageIndex - 1);
            }
        }
    });
}