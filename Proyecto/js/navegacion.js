function menuNavegacion() {
    let seleccion = document.getElementById('opcionesNavegacion').value;

    if (!seleccion) return;

    const opciones = {
        'Ayudar': {
            title: "Como Ayudar",
            redirectUrl: "ayudar.html"
        },
        'Mapa': {
            title: "Mapa de Impacto",
            redirectUrl: "mapa-impacto.html"
        }
    };

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


