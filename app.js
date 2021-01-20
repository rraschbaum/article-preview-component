const btn = document.querySelectorAll('.card__btn');
const btnActive = document.getElementById('buttonStd');
const sharePanel = document.getElementById('sharePanel');

// click event on buttons
btn.forEach( curBtn => {
    curBtn.addEventListener('click', shareActive);
});

function shareActive() {
    // Reveal share panel
    sharePanel.classList.toggle('card__share-panel--hidden');
    // Switch button state
    btnActive.classList.toggle('card__btn--active');
}