document.querySelector(".login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Obtener usuarios del localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar credenciales
    const usuarioValido = usuarios.find(
        (usuario) => usuario.correo === email && usuario.password === password
    );

    if (usuarioValido) {
        // Guardar sesión activa
        localStorage.setItem("sesionActiva", JSON.stringify(usuarioValido));

        // Redirigir a inicio.html
        window.location.href = "swipe.html";
    } else {
        alert("Correo o contraseña incorrectos.");
    }
});