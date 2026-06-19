/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER HOME ===============*/

const swiperHome = new Swiper(".home-swiper", {
  loop: true,
  speed: 800,
  effect: 'fade',
  parallax: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
   delay: 3000,
   disableOnInteraction: false,
  }
});

const scrollHeader = () => {
   const header = document.getElementById("header")
   this.scrollY >= 50 ?
   header.classList.add("scroll-header") : header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/*=============== GSAP ANIMATION ===============*/
gsap.defaults({opacity: 0, ease: 'power4.out', duration: 1.4})

const tl = gsap.timeline()
tl.from(".home-logoes img", {y: 200, stagger: .15}, '.3')
.from(".nav > *", {y: -30}, '.9')
.from(".home-data", {y: 60}, '1.2')
.from(".home-image", {y: 100}, '1.5')
.from(".home .swiper-pagination", {scale: 0, opacity: 1}, '1.5')
