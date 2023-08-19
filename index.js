//Funcion para obtener el mensaje usando ajax
const getMensaje = () => {
    let http = new XMLHttpRequest();
    http.onreadystatechange = () => {
        if ((http.readyState == 4) && (http.status == 200)) {
            document.getElementById('mensaje').innerHTML = http.responseText;
            document.getElementById('mensaje').style.color = 'green';
        } else {
            //Error
            document.getElementById('mensaje').innerHTML = 'Ocurrio un error al hacer el post';
            document.getElementById('mensaje').style.color = 'red';
        }
    }
    http.open('GET', 'http://localhost/gracias.txt', true);
    http.send();
}
//Funcion para validar que no este vacio
const validar = (element) => {
    if (element == '') {
        return false;
    } else {
        return true;
    }
}
//Funcion para registrarse
const registrarse = () => {
    //Elementos del formulario
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let tipo_contacto = document.getElementById('tipo_contacto').value;
    let asunto = document.getElementById('asunto').value;
    let descripcion = document.getElementById('descripcion').value;
    //Validaciones para que los campos obligatorios no esten vacios
    if (validar(nombre) == false) {
        document.getElementById('mensaje').style.color = 'red';
        return document.getElementById('mensaje').innerHTML = 'El campo nombre no puede estar vacio';
    }
    if (validar(apellido) == false) {
        document.getElementById('mensaje').style.color = 'red';
        return document.getElementById('mensaje').innerHTML = 'El campo apellido no puede estar vacio';
    }
    if (validar(email) == false) {
        document.getElementById('mensaje').style.color = 'red';
        return document.getElementById('mensaje').innerHTML = 'El campo email no puede estar vacio';
    }
    if (validar(tipo_contacto) == false) {
        document.getElementById('mensaje').style.color = 'red';
        return document.getElementById('mensaje').innerHTML = 'El campo tipo de contacto no puede estar vacio';
    }
    if (validar(asunto) == false) {
        document.getElementById('mensaje').style.color = 'red';
        return document.getElementById('mensaje').innerHTML = 'El campo asunto no puede estar vacio';
    }
    if (validar(descripcion) == false) {
        document.getElementById('mensaje').style.color = 'red';
        return document.getElementById('mensaje').innerHTML = 'El campo descripcion no puede estar vacio';
    }
    //Ajax
    getMensaje();
}
//Al hacer click en el boton
document.getElementById('boton').addEventListener('click', (event) => {
    //Evitar eventos predefinidos
    event.preventDefault();
    //Registrarse
    registrarse();
})