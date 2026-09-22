import './styles.css';

const menuButton = document.querySelector('#menuButton');
const nav = document.querySelector('#mainNav');
const themeToggle = document.querySelector('#themeToggle');
const form = document.querySelector('#volunteerForm');
const formStatus = document.querySelector('#formStatus');
const dialog = document.querySelector('#thanksDialog');
const closeDialog = document.querySelector('#closeDialog');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('is-open', !expanded);
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.dataset.theme = 'dark';
  themeToggle?.setAttribute('aria-pressed', 'true');
  themeToggle?.setAttribute('aria-label', 'Ativar modo claro');
  themeToggle.textContent = '☀️';
}

themeToggle?.addEventListener('click', () => {
  const isDark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
  themeToggle.setAttribute('aria-pressed', String(!isDark));
  themeToggle.setAttribute('aria-label', isDark ? 'Ativar modo escuro' : 'Ativar modo claro');
  themeToggle.textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    formStatus.textContent = 'Revise os campos obrigatórios antes de enviar.';
    form.reportValidity();
    return;
  }
  formStatus.textContent = 'Formulário validado com sucesso.';
  dialog.showModal();
});

closeDialog?.addEventListener('click', () => dialog.close());

dialog?.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') dialog.close();
});
