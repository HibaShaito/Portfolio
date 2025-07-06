// projects.js — optional: filter by category (mobile/web)
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.cat;
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = card.id === category || category === 'all' ? '' : 'none';
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  console.log("projects.js loaded ✅");

  const container = document.querySelector('.falling-stars-container');
  const starCount = 30;

  if (!container) {
    console.warn("Falling star container not found!");
    return;
  }

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('falling-star');

    // Random left position (0–100%)
    star.style.left = `${Math.random() * 100}%`;

    // Random animation delay and duration
    const delay = Math.random() * 5;
    const duration = 4 + Math.random() * 5;

    star.style.animationDelay = `${delay}s`;
    star.style.animationDuration = `${duration}s`;

    container.appendChild(star);
  }
});
document.addEventListener('DOMContentLoaded', () => {
  console.log("projects.js loaded ✅");

  const container = document.querySelector('.falling-stars-container');
  const starCount = 20;
  const sparkleCount = 15;

  if (!container) {
    console.warn("Falling star container not found!");
    return;
  }

  // Regular falling lines
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('falling-star');
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    star.style.animationDuration = `${4 + Math.random() * 5}s`;
    container.appendChild(star);
  }

  // Classic star shapes (CSS clip-path)
const shapeStarCount = 20;
for (let i = 0; i < shapeStarCount; i++) {
  const shape = document.createElement('div');
  shape.classList.add('star-shape');
  shape.style.left = `${Math.random() * 100}%`;
  shape.style.animationDelay = `${Math.random() * 5}s`;
  shape.style.animationDuration = `${4 + Math.random() * 5}s`;
  container.appendChild(shape);
}

});

