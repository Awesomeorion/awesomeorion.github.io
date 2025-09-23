function openNav() {
  document.getElementById("mySidenav").style.left = "0px";
  document.getElementById("overlay").style.opacity = "1";
  document.getElementById("overlay").style.pointerEvents = "all";
}
function closeNav() {
  document.getElementById("mySidenav").style.left = "-250px";
  document.getElementById("overlay").style.opacity = "0";
  document.getElementById("overlay").style.pointerEvents = "none";
}

let lastScrollTop = 0;
const navbar = document.querySelector('nav.topnav');

window.addEventListener('scroll', function() {
const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

if (currentScroll > lastScrollTop) {
  navbar.style.top = '-85px';
} else {
  navbar.style.top = '0';
}
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
