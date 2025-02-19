document
  .querySelector('.side-menu__icon-open')
  .addEventListener('click', (e) => {
    console.log(e.target);
    e.target.classList.toggle('menu-on');
    document.querySelector('.side-menu').classList.toggle('menu-on');
  });
document
  .querySelector('.side-menu__icon-close')
  .addEventListener('click', (e) => {
    console.log(e.target);
    e.target.classList.toggle('menu-on');
    document.querySelector('.side-menu').classList.toggle('menu-on');
  });
