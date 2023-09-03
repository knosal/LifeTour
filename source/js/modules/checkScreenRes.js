const sliderClassName = '.advantages__slider';

const resolutionCheck = (selector) => {
  const isDesktop = window.matchMedia('(min-width: 1200px)');
  return isDesktop.matches && selector === sliderClassName;
};

const isSlider = () => resolutionCheck(sliderClassName);

export { isSlider };
