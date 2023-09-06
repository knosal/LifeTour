const initButtonMenu = () => {
  const isOpened = 'is-opened';
  const header = document.querySelector('.header');
  const container = header.querySelector('.header__container');
  const toggleBtn = header.querySelector('.button-toggle');
  const nav = header.querySelector('.navigation');
  const navLink = header.querySelector('.navigation a');

  const isEscapeKey = (evt) => evt.key === 'Escape';
  const onModalEscKeydown = (evt) => (isEscapeKey(evt) ? closeMenu() : null);
  const onLinkClick = (evt) => (evt.target.matches(navLink) ? closeMenu() : null);
  const clickActionToggle = () => (toggleBtn.classList.contains(isOpened) ? closeMenu() : openMenu());

  const openMenu = () => {
    container.classList.add(isOpened);
    toggleBtn.classList.add(isOpened);
    nav.classList.add(isOpened);

    document.addEventListener('keydown', onModalEscKeydown);
    nav.addEventListener('click', onLinkClick);
    window.scrollLock.disableScrolling();
  };

  const closeMenu = () => {
    container.classList.remove(isOpened);
    toggleBtn.classList.remove(isOpened);
    nav.classList.remove(isOpened);

    document.removeEventListener('keydown', onModalEscKeydown);
    nav.removeEventListener('click', onLinkClick);
    window.scrollLock.enableScrolling();
  };

  toggleBtn.addEventListener('click', clickActionToggle);
};

export {initButtonMenu};
