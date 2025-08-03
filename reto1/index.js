let nombre = prompt("¿Cual es tu Nombre?");
let edad = prompt("¿Cual es tu Edad?");


console.log("El tipo de dato nombre es: " + typeof(nombre));
console.log("El tipo de dato de edad es: " + typeof(edad));


edad = parseInt(edad);
console.log("el tipo de dato despues de parse es: " + typeof(edad));


if (edad < 18){
    alert("No puedes ingresar");
} else {
    let invitacion = confirm("¿Tienes Invitación?");
    console.log("El tipo de dato de invitacion es " + typeof(invitacion));

    if (invitacion === true) {
        alert("Puedes ingresar");
    } else {
        alert("No puedes ingresar");
    }
}