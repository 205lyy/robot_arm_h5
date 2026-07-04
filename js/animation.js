var anim_state = {
    currentStep: 0,
    isPaused: false
};

function anim_init() {
    anim_state.currentStep = 0;
    anim_state.isPaused = false;
    if (typeof window.__robotArmInit === 'function') {
        window.__robotArmInit();
    } else {
        console.log('__robotArmInit not found, retrying...');
        setTimeout(anim_init, 200);
    }
}

function anim_pause() {
    anim_state.isPaused = true;
    if (typeof window.anim_pauseAnimation === 'function') {
        window.anim_pauseAnimation();
    }
}

function anim_resume() {
    anim_state.isPaused = false;
    if (typeof window.anim_resumeAnimation === 'function') {
        setTimeout(function() {
            window.anim_resumeAnimation();
        }, 100);
    }
}