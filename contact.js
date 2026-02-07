// FORMULARIO 
const form = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // para que no recargue la página

  // limpiar el mensaje
  formMessage.textContent = '';
  formMessage.style.color = '';

  // validación
  if (
  !nameInput.value.trim() ||
  !emailInput.value.trim() ||
  !messageInput.value.trim()

 ) {

    formMessage.textContent = 'Por favor, rellena todos los campos.';
    formMessage.style.color = 'red';
    return;
  }

  // email ok
  if (!emailInput.value.includes('@')) {
    formMessage.textContent = 'El email no es válido.';
    formMessage.style.color = 'red';
    return;
  }

  // todo ok
  formMessage.textContent = 'Mensaje enviado ¡Gracias!';
  formMessage.style.color = 'green';

  // resetear el formulario
  form.reset();
});
//BOTÓN ARRIBA
const scrollButton = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {   // aparece cuando haces scroll más de 300px
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


