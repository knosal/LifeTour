const initButtonMenu = () => {
  const isOpened = 'is-opened';
  const header = document.querySelector('.header');
  const container = header.querySelector('.header__container');
  const toggleBtn = header.querySelector('.button-toggle');
  const navigation = header.querySelector('.navigation');

  const onDocumentKeydown = (evt) => {
    return evt.key === 'Escape' ? closeMenu() : null;
  };

  const onLinkClick = (evt) => {
    return evt.target.matches('.navigation__link') ? closeMenu() : null;
  };

  const isMenu = (evt) => {
    return (evt.target.closest('.header') && evt.target.closest('.button-toggle')) || evt.target.closest('.navigation') ? evt.preventDefault() : closeMenu();
  };

  const openMenu = () => {
    container.classList.add(isOpened);
    toggleBtn.classList.add(isOpened);
    navigation.classList.add(isOpened);
    document.addEventListener('keydown', onDocumentKeydown);
    navigation.addEventListener('click', onLinkClick);
    document.addEventListener('click', isMenu);
    window.scrollLock.disableScrolling();
  };

  const closeMenu = () => {
    container.classList.remove(isOpened);
    toggleBtn.classList.remove(isOpened);
    navigation.classList.remove(isOpened);
    document.removeEventListener('keydown', onDocumentKeydown);
    navigation.removeEventListener('click', onLinkClick);
    document.removeEventListener('click', isMenu);
    window.scrollLock.enableScrolling();
  };

  toggleBtn.addEventListener('click', () => {
    return !toggleBtn.classList.contains(isOpened) ? openMenu() : closeMenu();
  });
};
export {initButtonMenu};
