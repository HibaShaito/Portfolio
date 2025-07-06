// hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});
// close menu when clicking outside or on a nav-item
document.addEventListener('click', e => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  }
});
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    setTimeout(() => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    }, 200);
  });
});
