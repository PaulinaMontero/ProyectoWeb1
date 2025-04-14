//variables controladoras
var panorama, viewer, container, infospot;

//obtener una referencia al contenedor donde se mostrara la escena 360
container = document.querySelector('#container_principal');

//cargar la foto 360
panorama = new PANOLENS.ImagePanorama('imagenes/360.jpg');


//El valor 50 es el radio del infospot
//crea y agrega el primer infospot

var infospot1 = new PANOLENS.Infospot(50, 'imagenes/pajaro.png');
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot1.position.set(-6 ,-201 , -500);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot1.addHoverText('Recorrido Guiado con un costo de 3000 colones por persona, donde podras encontrar mas de 100 especies distintas de Aves, contamos con Biologos expertos que te guiaran y enseñaran datos interesantes sobre las especies que se encuentran en el bosque.'  -60);
infospot1.element.innerHTML = '<div style="background-color: #63bd149c; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Recorrido Guiado con un costo de 3000 colones por persona, donde podras encontrar mas de 100 especies distintas de Aves, contamos con Biologos expertos que te guiaran y enseñaran datos interesantes sobre las especies que se encuentran en el bosque.</div>';
panorama.add(infospot1);

// Crear y agregar el segundo Infospot
var infospot2 = new PANOLENS.Infospot(50, 'imagenes/pueblo.png');
infospot2.position.set(500 ,-152 , -21);
infospot2.addHoverText('Podras visitar nuetro pueblo mas cercano, donde se encuentra una comunidad preciosa, muchos de nuestros colaboradores que trabajan para fundacion hicieron sus vidas en este pequeño pueblo, aqui tambien podras encontrar distintos negocios 100% costarricenses y gozar de su deliciosa comida y artesanias.'  -60);
infospot2.element.innerHTML = '<div style="background-color:  #63bd149c; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Podras visitar nuetro pueblo mas cercano, donde se encuentra una comunidad preciosa, muchos de nuestros colaboradores que trabajan para fundacion hicieron sus vidas en este pequeño pueblo, aqui tambien podras encontrar distintos negocios 100% costarricenses y gozar de su deliciosa comida y artesanias.</div>';
panorama.add(infospot2);


// Crear y agregar el tercer Infospot
var infospot3 = new PANOLENS.Infospot(50, 'imagenes/youtube.png');
infospot3.position.set(127 ,-500 , -199);
//Insertar el reproductor de video en YT en Infospot
infospot3.addHoverText(''  -60);
infospot3.element.innerHTML = `
    <div class="" style="">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ritYeoxakSs" allowfullscreen></iframe>
    </div>
`;
panorama.add(infospot3);



// Crear y agregar el cuarto Infospot
var infospot4 = new PANOLENS.Infospot(50, 'imagenes/advertencia.png');
infospot4.position.set(-264 ,-500 , -296);
//Agregar txt de informacion al infospot
infospot4.addHoverText(''  -60);
//Cambiar el contenido del infospot al pasar el mouse
infospot4.element.innerHTML = '<div style="background-color: #63bd149c; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Por esta carretera suelen circular muchos animales, le solicitamos bajar la velocidad y que conduzca con cuidado<br><br><img src="imagenes/carretera.jpg" alt="imagen ilustrativa" style="max-width: 100%; height: auto; border-radius: 5px;"><br><br> </div>';
panorama.add(infospot4);


// Crea y agrega el quinto infospot
var infospot5 = new PANOLENS.Infospot(50, 'imagenes/sonido.png');
infospot5.position.set(197 ,-357 , 500);
infospot5.addHoverText('Un audio MP3 multimedial ... ', -60);
infospot5.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/audio.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot5);



// Crea y agrega el sexto infospot
var infospot6 = new PANOLENS.Infospot(50, 'imagenes/pdf.png');
infospot6.position.set(-480, -134, 500);
// Agregar texto al hover y poner una posicion diferente al texto
infospot6.addHoverText('Entrar al PDF.',100);
// Crear el contenido del infospot
infospot6.element. innerHTML =`
<div style="background-color: #63bd149c; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">
    Entrar al PDF para conocer mas acerca de nuestra fundacion.
</div>
`;

// Agregar un evento de clic para abrir el PDF
infospot6.addEventListener('click', function() {
// Abrir el PDF en una nueva pestaña
window.open("pdf/nosotros.pdf", "_blank");
});
panorama.add(infospot6);





// Agrega la panorámica al visor con pantalla completa habilitada
viewer = new PANOLENS.Viewer({
    container: container,
    //Habilitar salida en pantalla completa
    output: 'fullscreen',
    autoHideInfospot: false
});
viewer.add(panorama);


var infospot7 = new PANOLENS.Infospot(50, 'imagenes/cascada.png');
infospot7.position.set(-108 ,173 , -500);
infospot7.addHoverText('Al final del recorrido podras disfrutar de un hermoso mirador donde podras encontrar una catarata y distintos spots para relajarte con tu familia o amigos.'  -60);
infospot7.element.innerHTML = '<div style="background-color:  #63bd149c; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Al final del recorrido podras disfrutar de un hermoso mirador donde podras encontrar una catarata y distintos spots para relajarte con tu familia o amigos.</div>';
panorama.add(infospot7);


var infospot8 = new PANOLENS.Infospot(50, 'imagenes/cuchilleria.png');
infospot8.position.set(-500 ,-75 , -312);
infospot8.addHoverText('Ven y visita nuestro restaurante, contamos con un amplio menu, tambien contamos con opciones veganas! todos los fondos de recaudamos con los restaurantes estan destinados a la fundacion.'  -60);
infospot8.element.innerHTML = '<div style="background-color:  #63bd149c; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Ven y visita nuestro restaurante, contamos con un amplio menu, tambien contamos con opciones veganas! todos los fondos de recaudamos con los restaurantes estan destinados a la fundacion.</div>';
panorama.add(infospot8);


var infospot9 = new PANOLENS.Infospot(50, 'imagenes/biologia.png');
infospot9.position.set(48 ,-41 , 500);
infospot9.addHoverText('Aqui es donde se hacen la mayor parte de investigaciones de nuestros biologos afiliados.'  -60);
infospot9.element.innerHTML = '<div style="background-color:  #63bd149c; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Aqui es donde se hacen la mayor parte de investigaciones de nuestros biologos afiliados.</div>';
panorama.add(infospot9);


var infospot10 = new PANOLENS.Infospot(50, 'imagenes/migracion.png');
infospot10.position.set(500 ,94 , -191);
infospot10.addHoverText('En ciertas epocas del año desde esta montaña podras observar el vuelo de las aves en migracion.'  -60);
infospot10.element.innerHTML = '<div style="background-color:  #63bd149c; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">En ciertas epocas del año desde esta montaña podras observar el vuelo de las aves en migracion.</div>';
panorama.add(infospot10);
