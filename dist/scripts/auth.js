const credentials = document.querySelector('.credentials');
const btns = document.querySelectorAll('.tab-btn');
const forms = document.querySelectorAll('.form-tab');

credentials.addEventListener('click', function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');
    // hide other articles
    forms.forEach(function (form) {
      form.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});
