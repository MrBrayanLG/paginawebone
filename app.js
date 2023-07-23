document.addEventListener('DOMContentLoaded', () => {
   const botonCambiarContenido = document.getElementById('cambiarContenido');
    const contenidoCambiado = document.getElementById('contenidoCambiado');
  
    
    botonCambiarContenido.addEventListener('click', () => {
      contenidoCambiado.textContent = '¡El contenido ha sido cambiado con JavaScript!';
    });
  });
  