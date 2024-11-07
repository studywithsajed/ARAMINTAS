
/*Preloader */
 
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

 /*Preloader */


/*scroll bar*/
 $(window).on('scroll', function () {
   if ($(this).scrollTop() > 100) {
     $('#scrollToTop').fadeIn();
   } else {
     $('#scrollToTop').fadeOut();
   }
 });

 // Scroll to top when button is clicked
 $('#scrollToTop').on('click', function (e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: 0
   }, 'slow');
 });
 
/*scroll bar*/

/* Nav bar*/
const mobile_nav = document.querySelector(".mobile-navbar-btn");

const nav_header = document.querySelector(".header-area")

const toggleNavbar = () => {
    nav_header.classList.toggle("active")
}

mobile_nav.addEventListener("click", () => toggleNavbar());

  
/*sticky Header*/

const header = document.getElementById("header");

function stickyHeader() {
    if (window.scrollY > 50) { 
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.addEventListener("scroll", stickyHeader);
