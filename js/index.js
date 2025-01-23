// Add this to your existing JavaScript
function showCustomAlert(title, message, redirectUrl) {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'alert-overlay';
  document.body.appendChild(overlay);

  // Create alert container
  const alertBox = document.createElement('div');
  alertBox.className = 'custom-alert';
  alertBox.innerHTML = `
    <button class="alert-close" aria-label="Close"></button>
    <h3 class="alert-title">${title}</h3>
    <p class="alert-message">${message}</p>
    <button class="alert-button">OK</button>
  `;

  document.body.appendChild(alertBox);

  // Function to close the alert
  function closeAlert() {
    overlay.classList.remove('show');
    alertBox.classList.remove('show');
    setTimeout(() => {
      overlay.remove();
      alertBox.remove();
    }, 300);
  }

  // Add click handler to the OK button
  const okButton = alertBox.querySelector('.alert-button');
  okButton.addEventListener('click', () => {
    window.location.href = redirectUrl;
  });

  // Add click handler to the close button
  const closeButton = alertBox.querySelector('.alert-close');
  closeButton.addEventListener('click', closeAlert);

  // Add click handler to the overlay for closing
  overlay.addEventListener('click', closeAlert);

  // Show the alert and overlay with a slight delay for the animation
  setTimeout(() => {
    overlay.classList.add('show');
    alertBox.classList.add('show');
  }, 10);
}

// Initialize the click handler for Fermentado en los dedos
document.addEventListener('DOMContentLoaded', () => {
  const fermentadoLink = document.querySelector('.titulo-fermentado').closest('a');
  if (fermentadoLink) {
    fermentadoLink.addEventListener('click', (e) => {
      e.preventDefault();
      showCustomAlert(
        'Advertencia',
        'Este poemario tiene contenido sensible y soez',
        fermentadoLink.href
      );
    });
  }
});