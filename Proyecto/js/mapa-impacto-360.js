// Variables controladoras para el tour 360
var panorama, viewer, container, infospot;

// Obtener una referencia al contenedor donde se mostrará la escena 360
container = document.querySelector('#container_principal');

// Cargar la foto 360
panorama = new PANOLENS.ImagePanorama('imagenes/360.jpg');

// Configurar infospots (puntos de información) en la panorámica
// Cada infospot es un punto interactivo en la imagen 360

// Infospot 1: Observación de Aves
var infospot1 = new PANOLENS.Infospot(50, 'imagenes/pajaro.png');
infospot1.position.set(-6, -201, -500);
infospot1.addHoverText('Centro de Observación de Aves', -60);
infospot1.element.innerHTML = '<div class="infospot-content">Centro de Observación de Aves: En este punto ofrecemos recorridos guiados con biólogos expertos que te mostrarán más de 100 especies distintas de aves. Todas las ganancias se destinan a proyectos de conservación.</div>';
panorama.add(infospot1);

// Infospot 2: Comunidad local
var infospot2 = new PANOLENS.Infospot(50, 'imagenes/pueblo.png');
infospot2.position.set(500, -152, -21);
infospot2.addHoverText('Comunidad Local', -60);
infospot2.element.innerHTML = '<div class="infospot-content">Comunidad Local: Trabajamos en estrecha colaboración con las comunidades locales. Muchos de nuestros colaboradores viven en este pequeño pueblo, donde también puedes encontrar artesanías y gastronomía tradicional costarricense.</div>';
panorama.add(infospot2);

// Infospot 3: Video informativo
var infospot3 = new PANOLENS.Infospot(50, 'imagenes/youtube.png');
infospot3.position.set(127, -500, -199);
infospot3.addHoverText('', -60);
infospot3.element.innerHTML = `
    <div class="infospot-content">
        <h4>Conservación de Aves en Costa Rica</h4>
        <iframe width="180" height="120" src="https://www.youtube.com/embed/ritYeoxakSs" allowfullscreen></iframe>
    </div>
`;
panorama.add(infospot3);

// Infospot 4: Información de seguridad
var infospot4 = new PANOLENS.Infospot(50, 'imagenes/advertencia.png');
infospot4.position.set(-264, -500, -296);
infospot4.addHoverText('', -60);
infospot4.element.innerHTML = '<div class="infospot-content">¡Precaución! En estas carreteras suelen circular muchos animales silvestres. Por favor, conduce con precaución para proteger nuestra fauna.<br><br><img src="imagenes/carretera.jpg" alt="Imagen de carretera en bosque" style="max-width: 100%;"></div>';
panorama.add(infospot4);

// Infospot 5: Sonidos de aves
var infospot5 = new PANOLENS.Infospot(50, 'imagenes/sonido.png');
infospot5.position.set(197, -357, 500);
infospot5.addHoverText('Sonidos de la Naturaleza', -60);
infospot5.element.innerHTML = '<div class="infospot-content">Escucha los sonidos de nuestras aves:<br><audio controls><source src="audios/audio.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot5);

// Infospot 6: Informe de conservación
var infospot6 = new PANOLENS.Infospot(50, 'imagenes/pdf.png');
infospot6.position.set(-480, -134, 500);
infospot6.addHoverText('Informe de Conservación', 100);
infospot6.element.innerHTML = `
<div class="infospot-content">
    Informe de Conservación: Descarga nuestro informe detallado sobre las iniciativas de conservación de aves en Costa Rica.
</div>
`;
infospot6.addEventListener('click', function() {
    window.open("pdf/nosotros.pdf", "_blank");
});
panorama.add(infospot6);

// Infospot 7: Área de cascada
var infospot7 = new PANOLENS.Infospot(50, 'imagenes/cascada.png');
infospot7.position.set(-108, 173, -500);
infospot7.addHoverText('Cascada Natural', -60);
infospot7.element.innerHTML = '<div class="infospot-content">Mirador de la Cascada: Al final del recorrido podrás disfrutar de este hermoso mirador que ofrece vistas espectaculares de la cascada. Un punto perfecto para descansar y conectar con la naturaleza.</div>';
panorama.add(infospot7);

// Infospot 8: Restaurante
var infospot8 = new PANOLENS.Infospot(50, 'imagenes/cuchilleria.png');
infospot8.position.set(-500, -75, -312);
infospot8.addHoverText('Restaurante Ecológico', -60);
infospot8.element.innerHTML = '<div class="infospot-content">Restaurante Ecológico: Nuestro restaurante ofrece un amplio menú con ingredientes locales y orgánicos, incluyendo opciones veganas. Todos los ingresos se destinan a financiar proyectos de conservación de la fundación.</div>';
panorama.add(infospot8);

// Infospot 9: Centro de investigación
var infospot9 = new PANOLENS.Infospot(50, 'imagenes/biologia.png');
infospot9.position.set(48, -41, 500);
infospot9.addHoverText('Centro de Investigación', -60);
infospot9.element.innerHTML = '<div class="infospot-content">Centro de Investigación: Aquí nuestros biólogos desarrollan estudios científicos sobre la biodiversidad de aves. Los resultados de estas investigaciones ayudan a mejorar nuestras estrategias de conservación.</div>';
panorama.add(infospot9);

// Infospot 10: Punto de migración
var infospot10 = new PANOLENS.Infospot(50, 'imagenes/migracion.png');
infospot10.position.set(500, 94, -191);
infospot10.addHoverText('Punto de Migración', -60);
infospot10.element.innerHTML = '<div class="infospot-content">Punto de Observación de Migración: Entre octubre y abril, este punto ofrece vistas espectaculares de aves migratorias que vienen desde Norteamérica. Un espectáculo natural impresionante.</div>';
panorama.add(infospot10);

// Crear el visor y agregar la panorámica
viewer = new PANOLENS.Viewer({
    container: container,
    output: 'fullscreen',
    autoHideInfospot: false
});
viewer.add(panorama);

// Función para habilitar la visualización de la posición de clics (útil para depuración)
function enablePositionTracking() {
    panorama.addEventListener('click', function(event) {
        let clickedPos = viewer.raycaster.intersectObject(viewer.panorama, true)[0].point;
        let value = Object.values(clickedPos);
        let x = parseInt(Math.floor(value[0]));
        let y = parseInt(Math.floor(value[1]));
        let z = parseInt(Math.floor(value[2]));
        
        console.log("Posición del clic: (" + x + "," + y + "," + z + ")");
    });
}

// Descomentar la siguiente línea para habilitar el seguimiento de posiciones
// enablePositionTracking();