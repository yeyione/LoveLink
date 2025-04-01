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

/////////////////////////////////////////////////////////

const cards = document.querySelectorAll('.card');
let likes = 0;
let dislikes = 0;

function handleSwipe(direction, wrapperId) {
    const cardWrapper = document.getElementById(wrapperId);
    if (direction === 'like') {
        likes++;
        console.log(`Liked ${wrapperId}`);
    } else if (direction === 'dislike') {
        dislikes++;
        console.log(`Disliked ${wrapperId}`);
    }
    cardWrapper.style.display = 'none'; // Oculta la tarjeta
    updateCounter(); // Actualiza los contadores
}

function updateCounter() {
    document.getElementById('likes').textContent = likes;
    document.getElementById('dislikes').textContent = dislikes;
}

document.querySelectorAll('.button.like').forEach((btn) => {
    btn.addEventListener('click', () => {
        const wrapperId = btn.closest('.card-wrapper').id;
        handleSwipe('like', wrapperId);
    });
});

document.querySelectorAll('.button.dislike').forEach((btn) => {
    btn.addEventListener('click', () => {
        const wrapperId = btn.closest('.card-wrapper').id;
        handleSwipe('dislike', wrapperId);
    });
});

cards.forEach((card) => {
    let isDragging = false;
    let startX = 0;
    let currentX = 0;

    card.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        card.style.transition = 'none';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        currentX = e.clientX - startX;
        card.style.transform = `translateX(${currentX}px) rotate(${currentX / 20}deg)`;
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;

        if (Math.abs(currentX) > 150) {
            card.style.transition = 'transform 0.3s ease';
            card.style.transform = `translateX(${currentX > 0 ? 500 : -500}px) rotate(${currentX / 20}deg)`;

            if (currentX > 0) {
                likes++;
            } else {
                dislikes++;
            }
            updateCounter();

            setTimeout(() => {
                card.remove();
                const nextCard = document.querySelector('.card');
                if (nextCard) {
                    nextCard.style.transform = 'translateX(0) rotate(0)';
                }
            }, 300);
        } else {
            card.style.transition = 'transform 0.3s ease';
            card.style.transform = 'translateX(0) rotate(0)';
        }
    });
});