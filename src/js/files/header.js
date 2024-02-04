const menuBurger = document.querySelector('.menu-burger');
const menuBody = document.querySelector('.header-menu__body');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const contactsBar = document.querySelector('.contacts-bar');

// Open menu burger
if (menuBurger) {
  menuBurger.addEventListener('click', function () {
    menuBody.classList.toggle('_burger-open');
    menuBurger.classList.toggle('_burger-open');
    lockPadding();
  })
}

// Fix header & contactsBar
fixHeader(650);
fixContactsBar(650);

window.onscroll = () => {
  fixHeader(650);
  fixContactsBar(650);
}

window.onresize = () => {
  fixContactsBar(650);
}

function fixContactsBar(fixPosition) {
  const contactsBarParentPageRect = contactsBar.parentElement.getBoundingPageRect();
  const headerAndContactsBarHeight = (
    header.offsetHeight +
    contactsBar.offsetHeight +
    parseFloat(getComputedStyle(main).marginTop)
  );

  if (window.matchMedia('(min-width: 47.99875em)').matches) {
    if (window.scrollY >= fixPosition) {
      if (window.scrollY < (contactsBarParentPageRect.bottom - headerAndContactsBarHeight)) {
        contactsBar.parentElement.classList.remove('_to-bottom');
        contactsBar.classList.add('_fixed');
        if (!contactsBar.style.top) {
          contactsBar.style.top = contactsBarParentPageRect.top + 'px';
        }
        contactsBar.style.left = contactsBarParentPageRect.left + 'px';
      } else {
        contactsBar.style.cssText = '';
        contactsBar.parentElement.classList.add('_to-bottom');
      }
    } else if (window.scrollY == 0) {
      contactsBar.classList.remove('_fixed');
      contactsBar.style.cssText = '';
    }
  } else {
    contactsBar.classList.remove('_fixed');
    contactsBar.style.cssText = '';
  }
}

function fixHeader(fixPosition) {
  if (window.scrollY >= fixPosition) {
    header.classList.remove('_header-non-fixed');
    header.classList.add('_header-fixed');
    main.style.paddingTop = header.offsetHeight + 'px';
  } else if (
    window.scrollY >= header.offsetHeight + 50
    && window.scrollY < fixPosition
  ) {
    if (!header.classList.contains('_header-fixed')) header.classList.add('_header-non-fixed');
  }
  else if (
    window.scrollY > 0
    && window.scrollY < header.offsetHeight + 50
  ) header.classList.remove('_header-non-fixed');
  else {
    header.classList.remove('_header-fixed');
    main.style.paddingTop = '';
  }
}