// about.js — intersection to add .visible on the about section
const aboutSec = document.getElementById('about');
new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    aboutSec.classList.add('visible');
    observer.disconnect();
  }
}, { threshold: 0.3 }).observe(aboutSec);
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.getElementById("about");
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        aboutSection.classList.add("visible");
      }
    },
    { threshold: 0.1 }
  );
  observer.observe(aboutSection);
});
