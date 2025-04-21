// Carga de la función init al cargar la página
window.addEventListener('load', init, false);

// Función inicial
function init() {
    // Declaración de variables
    const btnEnviar = document.getElementById('btnSend');
    const alerta = document.getElementById('mensajeAlert');
    const expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    // Función del botón Enviar
    btnEnviar.onclick = function() {
        // Obtener valores de los campos
        const nombre = document.getElementById('nombreTxt').value;
        const apellido = document.getElementById('apellidoTxt').value;
        const email = document.getElementById('emailTxt').value;
        const numero = document.getElementById('numberTxt').value;
        const mensaje = document.getElementById('mensajeTxt').value;

        // Validación de campos
        if (nombre === '' && apellido === '' && email === '' && numero === '' && mensaje === '') {
            mostrarAlerta('Debe llenar todos los campos.', false);
        } else if (nombre === '') {
            mostrarAlerta('El campo nombre está vacío.', false);
        } else if (apellido === '') {
            mostrarAlerta('El campo apellido está vacío.', false);
        } else if (email === '') {
            mostrarAlerta('El campo email está vacío.', false);
        } else if (expressionEmail.test(email) === false) {
            mostrarAlerta('Email inválido.', false);
        } else if (numero === '') {
            mostrarAlerta('El campo teléfono está vacío.', false);
        } else if (mensaje === '') {
            mostrarAlerta('El campo mensaje está vacío.', false);
        } else {
            // Si NO existe error en los campos validados, se envían los datos al servidor de correo
            mostrarAlerta('Mensaje enviado. Pronto le confirmamos!', true);
            // Service ID/template ID/ID form/public key cuenta
            emailjs.sendForm('service_6yqsf5f', 'template_d174slu', '#form1', 'T4TXz5yl53Tix6Vmc');
            // Limpiar formulario
            limpiar();
        }
        return false;
    }

    // Función para mostrar alertas
    function mostrarAlerta(texto, esExito) {
        alerta.textContent = texto;
        if (esExito) {
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');
        } else {
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        }
    }

    // Función para limpiar los campos
    function limpiar() {
        document.getElementById('nombreTxt').value = '';
        document.getElementById('apellidoTxt').value = '';
        document.getElementById('emailTxt').value = '';
        document.getElementById('numberTxt').value = '';
        document.getElementById('mensajeTxt').value = '';
    }
}