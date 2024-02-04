// Проверка мобильного браузера
let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

// Добавление класса _touch для <html> если браузер мобильный
function addTouchClass() {
  if (isMobile.any()) document.documentElement.classList.add('_touch');
}

// Блокировка скролла и добавление padding-right
function lockPadding() {
  let scrollWidth = window.innerWidth - document.documentElement.clientWidth;
  let lockItems = document.querySelectorAll('._lock-padding');

  document.body.classList.toggle('_lock');

  if (document.body.classList.contains('_lock') && document.body.style.paddingRight === '') {
    document.body.style.paddingRight = scrollWidth + 'px';
    lockItems.forEach(item => {
      if (getComputedStyle(item).position === 'fixed') {
        item.style.paddingRight = scrollWidth + 'px';
      }
    });
  } else {
    document.body.style.paddingRight = '';
    lockItems.forEach(item => {
      if (getComputedStyle(item).position === 'fixed') {
        item.style.paddingRight = '';
      }
    });
  }
}

// Получение координат относительно документа
Element.prototype.getBoundingPageRect = function () {
  let clientCoords = this.getBoundingClientRect();
  return {
    x: clientCoords.x + window.scrollX,
    y: clientCoords.y + window.scrollY,
    top: clientCoords.top + window.scrollY,
    bottom: clientCoords.bottom + window.scrollY,
    left: clientCoords.left + window.scrollX,
    right: clientCoords.right + window.scrollX,
  }
}