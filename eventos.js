const divElement = document.getElementById('contenedor');
const botonElement = document.getElementById('boton-saludar');

divElement.addEventListener('click', function(event) {
  if (event.target === divElement) {
    alert('Hola! Soy el div');
    event.stopPropagation();
  }
});