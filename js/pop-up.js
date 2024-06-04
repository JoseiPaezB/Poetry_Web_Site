// Obtener todos los enlaces con la clase "popup-link"
const popupLinks = document.querySelectorAll('.popup-link');

// Obtener el elemento de audio
const audio = document.getElementById('popupAudio');

// Iterar sobre cada enlace
popupLinks.forEach(link => {
    // Agregar un evento de clic a cada enlace
    link.addEventListener('click', function(event) {
        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();
        // Lógica para mostrar el popup
        // Por ejemplo, puedes mostrar un popup modal, un div que se superpone, etc.
        alert('¡Popup activado!');
        // Reproducir el audio
        audio.play();
        // Si quieres redirigir a la página después de mostrar el popup
        // window.location.href = link.href;
    });
});
