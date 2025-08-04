let pinCorrecto = "1234"; // PIN correcto
let saldo = 100000; // Saldo inicial

console.log("El tipo de dato pin es: " + typeof(pinCorrecto));
console.log("El tipo de dato saldo es: $" + typeof(saldo));

saldo = parseInt(saldo);

let pinIngresado = prompt("Ingrese su PIN:");

if (pinIngresado === pinCorrecto) {
    alert("Su saldo es: $" + saldo);

    let deseaRetirar = confirm("¿Desea realizar un retiro?");

    if (deseaRetirar) {
        while (true) {
            let montoARetirar = parseFloat(prompt("Ingrese el monto a retirar:"));

            if (isNaN(montoARetirar) || montoARetirar <= 0) {
                alert("Monto inválido. Debe ingresar un número mayor a 0.");
            } else {
                if (montoARetirar > saldo) {
                    alert("Fondos insuficientes.");
                    break;
                } else {
                    saldo = saldo - montoARetirar;
                    alert("Retiro exitoso. Ha retirado: $" + montoARetirar);
                    alert("Su saldo actual es: $" + saldo);
                }
            }

            let otraOperacion = confirm("¿Desea realizar otra operación?");
            if (!otraOperacion) {
                alert("Gracias por usar nuestro cajero automático.");
                break;
            }

            alert("Su saldo actual es: $" + saldo);
        }
    } else {
        alert("Gracias por usar nuestro cajero automático.");
    }

} else {
    alert("PIN incorrecto. Inténtelo de nuevo.");
}

