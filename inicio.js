// Verificar si hay una sesión activa
const sesionActiva = JSON.parse(localStorage.getItem("sesionActiva"));

if (!sesionActiva) {
  // Redirigir a login.html si no hay sesión activa
  window.location.href = "login.html";
}

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Usuarios de ejemplo para mensajes
const users = [
  {
    nombre: "nombre1",
    apellidos: "apellidos1",
    correo: "correo_user1@email.com",
    password: "pass111",
    birthdate: "1999-01-01",
    genero: "otro",
    orientacion: "otro",
    intereses: ".",
    fotos: []
  },
  {
    nombre: "nombre2",
    apellidos: "apellidos2",
    correo: "correo_user2@email.com",
    password: "pass222",
    birthdate: "2001-01-01",
    genero: "otro",
    orientacion: "otro",
    intereses: ".",
    fotos: []
  }
];

// Evitar duplicados
users.forEach(user => {
  if (!usuarios.some(u => u.correo === user.correo)) {
    usuarios.push(user);
  }
});

// Almacenar usuarios en localStorage
localStorage.setItem("usuarios", JSON.stringify(users));