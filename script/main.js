document.getElementById("botonaso").onclick = function click(evento) {

    evento.preventDefault(); //* para evitar que haga lo que hace por default (enviar el formulario y recargar la pagina). Esto para poder trabajar con los valores que cargue el usuario.

    let nombre = document.getElementById("nombreusuario").value;
    let email = document.getElementById("correo").value;

    alert("Muchas gracias " + nombre + ". Evaluaremos tu peticion y en caso de que sea aprobada enviaremos un mail a \"" + email + "\". Gracias por hacer Patria.");

    let entrada = prompt("Antes de irte, olvidé preguntarte cual es tu nacionalidad.\nPor favor, ingresa el País en que naciste.");
    let salida = "Si la vista no me engaña, veo a Fausto en la montaña. Y si mis calculos son correctos, usted ingreso: '" + entrada + "'.\n\nPresiona continuar.";
    alert(salida);

    if (entrada === "Argentina" || entrada === "argentina" || entrada === "ARGENTINA" || entrada === "argentina") {
        alert("Hermosa mañana, verdad?\n\nFelicidades por la tercer estrella, Campeón!");
    }

    else {
        alert("Lamentamos que no tengas el privilegio de haber nacido en el mismo suelo que Nadia la Cachorra.\nPero, hey! Aun puedes pedir la ciudadania!");
    }

}

