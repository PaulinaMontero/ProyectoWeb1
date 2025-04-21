function menuNavegacion() {
    let seleccion = document.getElementById('opcionesNavegacion').value;

    // Solo continuar si se ha seleccionado algo
    if (!seleccion) return;

    // Configurar la notificación y redirigir según la opción seleccionada
    const opciones = {
        'Ayudar': {
            title: "Cómo Ayudar",
            redirectUrl: "ayudar.html"
        },
        'Mapa': {
            title: "Mapa de Impacto",
            redirectUrl: "mapa-impacto.html"
        }
    };

    // Verificar si la selección existe en las opciones
    if (opciones[seleccion]) {
        Swal.fire({
            icon: "success",
            title: opciones[seleccion].title,
            text: "Un momento por favor...",
            showConfirmButton: false,
            timer: 1000,
        }).then(() => {
            window.location.href = opciones[seleccion].redirectUrl;
        });
    }
}