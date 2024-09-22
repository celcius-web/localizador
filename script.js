function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dateTimeString = now.toLocaleDateString('es-ES', options);
    document.getElementById('date-time').textContent = dateTimeString;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById('location').textContent = "Geolocalización no es soportada por este navegador.";
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById('location').textContent = `Latitud: ${lat}, Longitud: ${lon}`;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('location').textContent = "Permiso denegado para acceder a la ubicación.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('location').textContent = "La ubicación no está disponible.";
            break;
        case error.TIMEOUT:
            document.getElementById('location').textContent = "Se agotó el tiempo de espera para obtener la ubicación.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('location').textContent = "Ocurrió un error desconocido.";
            break;
    }
}

// Actualiza la fecha y hora cada segundo
setInterval(updateDateTime, 1000);
getLocation();
