const headerEl = document.querySelector('header');
const navEl = headerEl.querySelector('nav');

const fitFixedVerticalNav = () => {
  if (window.innerWidth >= 1024) {
    headerEl.style.width = `${
      navEl.offsetWidth +
      parseFloat(window.getComputedStyle(navEl, null).marginRight) +
      parseFloat(window.getComputedStyle(navEl, null).marginLeft)
    }px`;
  } else headerEl.removeAttribute('style');
};

window.onload = fitFixedVerticalNav();

window.addEventListener('resize', fitFixedVerticalNav);
