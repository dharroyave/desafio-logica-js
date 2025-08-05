let seguir = "si";

while (seguir.toLowerCase() === "si") {
  let numero = prompt("Ingresa un número para ver su tabla de multiplicar:");

  if (isNaN(numero)) {
    alert("Por favor ingresa un número válido.");
    continue;
  }

  numero = parseInt(numero);

  let resultado = `Tabla del ${numero}:\n`;
  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`;
  }

  alert(resultado);

  seguir = prompt("¿Deseas ver otra tabla? (si / no)");
}

alert("Programa finalizado");
