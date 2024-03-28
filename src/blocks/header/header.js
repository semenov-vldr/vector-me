function mobileNav () {
  const header = document.querySelector("header.header");
  if (!header) return;
  const nav = header.querySelector(".header__nav");
  const burger = header.querySelector(".header__burger");
  const navLinks = nav.querySelectorAll(".header-nav__link");

  function closeMenu () {
    nav.classList.remove("js-mobile-nav-open");
    unblockScrollBody();
  };

  // Открытие мобильного меню Бургер
  burger.addEventListener("click", () => {
    nav.classList.toggle("js-mobile-nav-open");
    toggleBlockScrollBody();

    // Скрытие меню по клику вне блока
    if ( nav.classList.contains("js-mobile-nav-open") ) {
      document.addEventListener("click", (evt) => {
        if (!evt.target.closest(".header")) closeMenu();
      });
    }
  });

  window.onscroll = function () {
    header.classList.toggle('js-scroll', window.scrollY > 1);
  };

  navLinks.forEach(navLink => {
    navLink.addEventListener("click", closeMenu);
  });
}

mobileNav();

