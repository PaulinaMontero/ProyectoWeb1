/* Cargar la función llamada login al dar clic al botón Iniciar */
document.getElementById("btn-login").addEventListener("click", login);

/* Función que muestra alertas de validación */
function validation_alert(ptext) {
    Swal.fire({
        title: "Verificar la entrada de datos",
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#16a749",
        html: '<iframe width="128" height="96" frameborder="0" src="https://lottie.host/embed/dc05c0d8-7aa7-438f-ba76-4069443889b1/l2bnS3hlXM.lottie"></iframe> <br><p>' + ptext + " </p>", 
    });
}

/* Función login para autenticación */
function login() {
    /* Obtener valores de los campos */
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    
    /* Credenciales de acceso */
    let username = "cenfo";
    let password = "123";
    
    /* Variables para validación */
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";
    
    /* Validar campos vacíos */
    for (let i = 0; i < input.length; i++) {
        // Quitar clase de error si existía previamente
        document.getElementById(input_id[i]).classList.remove("error");
        
        // Validar si el campo está vacío
        if (input[i] == "") {
            text = "Los campos requeridos NO pueden estar vacios.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    /* Validar credenciales si no hay errores */
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                title: "Iniciando Sesion",
                showConfirmButton: false,
                customClass: {                 
                    title: 'formatos1',                      
                },
                timer: 5000,
                html: '<iframe width="128" height="96" frameborder="0" src="https://lottie.host/embed/eb9c12e2-e949-4441-9d8f-57023c63a1a0/5CW5MV2WXz.lottie"></iframe> <br><br><p>Esperar un momento...</p>',                
            }).then(() => {
                window.location.href = "landing.html", "blank";
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            validation_alert(text);
        }
    }
}

/* Función para limpiar los campos del formulario */
function limpiar() {
    document.getElementById('in-txt-user').value = "";
    document.getElementById('in-txt-pass').value = "";
}