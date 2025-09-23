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

document.querySelector('.ripple-button').addEventListener('click', function (e) {
  const ripple = document.createElement('span');
  const rect = this.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.classList.add('ripple');
  
  this.appendChild(ripple);
  
  ripple.addEventListener('animationend', () => {
    ripple.remove();
  });
});
