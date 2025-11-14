// script.js - Lógica simple de login (demo, no para producción)
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  const msg = document.getElementById('message');

  // Credenciales de ejemplo (hardcodeadas para demo)
  const VALID_USER = 'user';
  const VALID_PASS = 'pass123';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    msg.textContent = '';

    const username = form.username.value.trim();
    const password = form.password.value;

    if (!username || !password) {
      msg.style.color = 'crimson';
      msg.textContent = 'Rellena usuario y contraseña.';
      return;
    }

    if (username === VALID_USER && password === VALID_PASS) {
      msg.style.color = 'green';
      msg.textContent = 'Acceso concedido. Redirigiendo...';
      // Guardar flag simple para mostrar en dashboard (solo demo)
      localStorage.setItem('demo_logged', '1');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 700);
    } else {
      msg.style.color = 'crimson';
      msg.textContent = 'Usuario o contraseña incorrectos.';
    }
  });
});