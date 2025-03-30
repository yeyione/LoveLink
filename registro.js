const btnregister = document.getElementById("btn-register");
btnregister.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("lastnm").value;
  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password1").value;
  // const password2 = document.getElementById("password2").value;
  const birthdate = document.getElementById("birthdate").value;
  const genero = document.querySelector("input[name='genero']:checked").value;
  const orientacion = document.querySelector(
    "input[name='orien']:checked"
  ).value;
  const intereses = document.getElementById("intereses").value;
  const fotos = [
    document.getElementById("fotos1").value,
    document.getElementById("fotos2").value,
    document.getElementById("fotos3").value,
    document.getElementById("fotos4").value,
    document.getElementById("fotos5").value,
    document.getElementById("fotos6").value,
  ];

  // Crear un objeto usuario
  const usuario = {
    nombre,
    apellidos,
    correo,
    password,
    birthdate,
    genero,
    orientacion,
    intereses,
    fotos,
  };

  // Guardar el usuario en localStorage
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Redirigir a login.html
  window.location.href = "login.html";
});
