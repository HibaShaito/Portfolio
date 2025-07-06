// contact.js — simple form validation & success message
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  form.innerHTML = '<p>Thanks—your message has been sent! 🎉</p>';
});
