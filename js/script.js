
// Obtener todos los elementos de las miniaturas
const thumbnails = document.querySelectorAll('.thumbnail');

// Obtener el modal y la imagen dentro del modal
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const caption = document.getElementById('caption');

// Obtener el botón de cierre
const closeBtn = document.querySelector('.close');

// Añadir evento de clic en cada miniatura
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    modal.style.display = "block"; // Muestra el modal
    modalImage.src = thumbnail.src; // Cambia la imagen del modal por la imagen clickeada
    caption.textContent = thumbnail.alt; // Añade el texto del alt como título en el modal
  });
});

// Cerrar el modal al hacer clic en el botón de cierre
closeBtn.addEventListener('click', () => {
  modal.style.display = "none"; // Ocultar el modal
});

// Cerrar el modal si se hace clic fuera de la imagen
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
