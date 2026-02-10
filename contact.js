//  FORMULARIO 

const form = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function (event) {
 
  // limpiar el mensaje
  formMessage.textContent = '';
  formMessage.style.color = '';

  // validación de los campos vacíos
  if (
  !nameInput.value.trim() ||
  !emailInput.value.trim() ||
  !messageInput.value.trim()

 ) {
    event.preventDefault(); // bloquea si hay error
    formMessage.textContent = '¡Rellena todos los campos!.';
    formMessage.style.color = 'red';
    return;
  }

  // email ok
  if (!emailInput.value.includes('@')) {
    event.preventDefault();
    formMessage.textContent = 'El email no es válido.';
    formMessage.style.color = 'red';
    return;
  }
});



//BOTÓN ARRIBA
const scrollButton = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {   // aparece cuando haces scroll más de 300px (scrollY cuántos píxeles has bajado desde arriba)
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
});

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  
  });
});


