// projects.js — optional: filter by category (mobile/web)
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.cat;
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = card.id === category || category === 'all' ? '' : 'none';
    });
  });
});

