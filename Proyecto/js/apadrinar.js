// Objeto con precios por tipo de ave (en colones)
const preciosAves = {
    quetzal: 50000,
    lapazul: 35000,
    laparoja: 40000,
    tucan: 30000,
    colibri: 20000
};

// Objeto con nombres completos de aves
const nombresAves = {
    quetzal: "Quetzal Resplandeciente",
    lapazul: "Lapa Azul",
    laparoja: "Lapa Roja",
    tucan: "Tucán Pico Iris",
    colibri: "Colibrí de Garganta Rubí"
};

// Objeto con nombres completos de ubicaciones
const nombresUbicaciones = {
    monteverde: "Reserva Monteverde",
    tortuguero: "Parque Nacional Tortuguero",
    corcovado: "Parque Nacional Corcovado",
    talamanca: "Cordillera de Talamanca"
};

// Función para calcular el costo del apadrinamiento
function calcularApadrinamiento() {
    // Obtener valores del formulario
    const tipoAve = document.getElementById('birdType').value;
    const cantidad = document.getElementById('birdCount').value;
    const ubicacion = document.getElementById('location').value;
    
    // Validar que no haya campos vacíos
    if (!tipoAve || !cantidad || !ubicacion) {
        // Mostrar alerta de error
        Swal.fire({
            icon: 'error',
            title: 'Datos incompletos',
            text: 'Por favor complete todos los campos del formulario.',
            confirmButtonColor: '#16a749'
        });
        return;
    }
    
    // Validar que la cantidad sea un número positivo
    if (isNaN(cantidad) || parseInt(cantidad) <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Cantidad inválida',
            text: 'Por favor ingrese un número positivo de aves a apadrinar.',
            confirmButtonColor: '#16a749'
        });
        return;
    }

    // Calcular costo total
    const precioUnitario = preciosAves[tipoAve];
    const cantidadNumerica = parseInt(cantidad);
    const costoTotal = precioUnitario * cantidadNumerica;
    
    // Mostrar resultados
    document.getElementById('resultSpecies').textContent = nombresAves[tipoAve];
    document.getElementById('resultCount').textContent = cantidadNumerica;
    document.getElementById('resultLocation').textContent = nombresUbicaciones[ubicacion];
    document.getElementById('resultTotal').textContent = `₡${costoTotal.toLocaleString('es-CR')}`;
    
    // Habilitar el botón de confirmar
    document.getElementById('confirmBtn').disabled = false;
    
    // Mostrar un resumen como notificación
    Swal.fire({
        icon: 'success',
        title: 'Cálculo completado',
        text: `Apadrinamiento de ${cantidadNumerica} ${nombresAves[tipoAve]} por un total de ₡${costoTotal.toLocaleString('es-CR')}`,
        confirmButtonColor: '#16a749'
    });
}

// Función para limpiar el formulario
function limpiarFormulario() {
    // Restablecer campos del formulario
    document.getElementById('birdType').value = '';
    document.getElementById('birdCount').value = '';
    document.getElementById('location').value = '';
    
    // Restablecer resultados
    document.getElementById('resultSpecies').textContent = '-';
    document.getElementById('resultCount').textContent = '-';
    document.getElementById('resultLocation').textContent = '-';
    document.getElementById('resultTotal').textContent = '₡0';
    
    // Deshabilitar el botón de confirmar
    document.getElementById('confirmBtn').disabled = true;
}

// Evento para cuando se confirma el apadrinamiento
document.addEventListener('DOMContentLoaded', function() {
    const confirmBtn = document.getElementById('confirmBtn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function() {
            Swal.fire({
                icon: 'success',
                title: 'Proceso de Apadrinamiento',
                text: 'El proceso a concluido exitosamente.',
                confirmButtonColor: '#16a749',
                confirmButtonText: 'Continuar'
            });
        });
    }
});




document.addEventListener('DOMContentLoaded', function() {
    const galleryItem = document.querySelector('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    

    galleryItem.addEventListener('click', function() {
      const imageSrc = this.querySelector('img').src;
      const caption = this.querySelector('.gallery-caption').textContent;
      
      openLightbox(imageSrc, caption);
    });
    
 
    function openLightbox(src, caption) {
      lightboxImage.src = src;
      lightboxCaption.textContent = caption;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden'; 
    }
    

    lightboxClose.addEventListener('click', function() {
      lightbox.classList.remove('active');
      document.body.style.overflow = ''; 
    });
    

    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    document.addEventListener('keydown', function(e) {
      if (!lightbox.classList.contains('active')) return;
      
      if (e.key === 'Escape') {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });