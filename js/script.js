let headerBurger = document.getElementById('header-burger');
let headerRight = document.getElementById('header-right');

headerBurger.addEventListener('click', function (addClass) {
  headerBurger.classList.toggle('header__burger-visible');
  headerRight.classList.toggle('header__right-visible');
});
