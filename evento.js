function mostrarAlerta() {
    alert("¡Hola!");
}

function mostrarAlertaDiv() {
    alert("Hola! Soy el div.");
}

var miDiv = document.querySelector('.contenedor');
miDiv.addEventListener('click', mostrarAlertaDiv);