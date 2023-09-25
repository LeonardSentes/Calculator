let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
    playButtonSound();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
    playClearSound();
}

function playButtonSound() {
    let audio = new Audio('media/button-sound.wav');
    audio.play();
}

function playClearSound() {
    let audio = new Audio('media/clear-sound.wav');
    audio.play();
}

function playResultSound() {
    let audio = new Audio('media/result-sound.wav');
    audio.play();
}

function playErrorSound() {
    let audio = new Audio('media/error-sound.wav');
    audio.play();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        if (isNaN(displayValue)) {
            displayValue = 'Error';
            playErrorSound();
        } else {
            playResultSound(); 
        }
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        playErrorSound();
        updateDisplay();
    }
}


