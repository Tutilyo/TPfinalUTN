document.getElementById("botonaso").onclick = function click(evento) {

    evento.preventDefault; //* para evitar que haga lo que hace por default (enviar el formulario y recargar la pagina). Esto para poder trabajar con los valores que cargue el usuario.

    const nombre = document.getElementById("nombreusuario").value;
    const email = document.getElementById("correo").value;

    alert("Muchas gracias " + nombre + ". Evaluaremos tu peticion y en caso de que sea aprobada enviaremos un mail a \"" + email + "\". Gracias por hacer Patria.")


}