// Función para guardar los datos en localStorage
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario

    // Obtener los datos del formulario
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('password').value;

    // Guardar los datos en localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('contraseña', contraseña);

    alert('Datos guardados!');
});

// Cargar los datos guardados (si los hay)
window.onload = function() {
    document.getElementById('email').value = localStorage.getItem('email');
    document.getElementById('password').value = localStorage.getItem('contraseña');
};