// Función para guardar los datos en localStorage
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario

    // Obtener los datos del formulario
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value;

    // Guardar los datos en localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('contraseña', contraseña);

    alert('Datos guardados!');
});

// Cargar los datos guardados (si los hay)
window.onload = function() {
    if (localStorage.getItem('email') && localStorage.getItem('email')) {
        document.getElementById('email').value = localStorage.getItem('email');
        document.getElementById('contraseña').value = localStorage.getItem('email');
    }
};