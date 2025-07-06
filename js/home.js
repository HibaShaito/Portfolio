// home.js — hero zoom on scroll + scroll arrow
const hero = document.getElementById('hero');
window.addEventListener('scroll', () => {
  const scale = 1 + window.scrollY / 2000;
  hero.style.transform = `scale(${scale})`;
});

document.getElementById('scrollDown')?.addEventListener('click', () => {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
});
