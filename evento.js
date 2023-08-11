function mostrarAlerta() {
    alert("¡Hola!");
}

function mostrarAlertaDiv(event) {
    event.stopPropagation(); // Detener la propagación del evento
    alert("Hola! Soy el div.");
}

var miDiv = document.querySelector('.contenedor');
miDiv.addEventListener('click', mostrarAlertaDiv);