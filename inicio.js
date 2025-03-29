// Verificar si hay una sesión activa
const sesionActiva = JSON.parse(localStorage.getItem("sesionActiva"));

if (!sesionActiva) {
  // Redirigir a login.html si no hay sesión activa
  window.location.href = "login.html";
}
