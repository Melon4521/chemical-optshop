const popupOpeners = document.querySelectorAll('.popup-opener[data-popup_open]');
const body = document.querySelector('body');
const lockElements = document.querySelector('.lock-padding');

let unlock = true;

if (popupOpeners.length > 0) {
    for (let i = 0; i < popupOpeners.length; i++) {
        let popupOpener = popupOpeners[i];
        popupOpener.addEventListener('click', (e) => {
            let dataAtribute = popupOpener.dataset.popup_open;
            if (dataAtribute[0] != '#') {
                dataAtribute = '#'+dataAtribute;
            };
            let popup = document.querySelector(dataAtribute);
            popupOpen(popup);
            e.preventDefault();
        });
    };
};

function popupOpen(popup) {
    if (popup && unlock) {
        openedPopup = document.querySelector('.popup._open');
        if (openedPopup) {
            closePopup(openedPopup, false);
        } else {
            lockBody();
        };
        popup.classList.add('_open');
        popup.addEventListener('click', (e) => {
            if (!e.target.closest('.popup__content') || e.target.classList.contains('popup__close')) {
                closePopup(popup, true);
                e.preventDefault();
            };
        });
    };
};

function closePopup(popup, doUnlock) {
    if (popup && unlock) {
        popup.classList.remove('_open');
        if (doUnlock) {
            unlockBody();
        };
    };
};

function lockBody() {
    let widthWithoutScroll = window.innerWidth - document.documentElement.clientWidth;
    body.classList.add('_lock');
    body.style.paddingRight = widthWithoutScroll + 'px';
    if (lockElements) {
        for (let i = 0; i < lockElements.length; i++) {
            const elem = lockElements[i];
            elem.style.paddingRight = widthWithoutScroll + 'px';
        };
    };

    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, 500);
};

function unlockBody() {
    setTimeout(() => {
        if (body.classList.contains('_lock') && !navigationMenu.classList.contains('_burger-open')) {
            body.classList.remove('_lock');
            body.style.paddingRight = '0px';
        }
        if (lockElements) {
            for (let i = 0; i < lockElements.length; i++) {
                const elem = lockElements[i];
                elem.style.paddingRight = '0px';
            };
        };
    }, 300)

    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, 500);
};