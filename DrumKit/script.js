window.addEventListener('keydown', playSound);
const buttons = document.querySelectorAll('.key');
buttons.forEach(button => button.addEventListener('click', () => playSound({ keyCode: button.dataset.key })));

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

    setTimeout(() => key.classList.remove('playing'), 100);
}

