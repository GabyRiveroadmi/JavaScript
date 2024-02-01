/*Calculadora por medio de pago donde el usuario puede ver el importe a pagar, segun el medio de pago elegido*/

let nombre = prompt("Ingresa tu nombre")
alert("Bienvenido " + nombre)
console.log("Bienvenido " + nombre)
let mediodepago = prompt("Ingresa el medio de pago: efectivo, transferencia o tarjeta");
console.log("Elegi tu medio de pago: efectivo 20% descuento, transferencia 10% descuento, tarjeta 10% de recargo");

let efectivo = 0.80;
let transferencia = 0.90;
let tarjeta = 1.10;
let importe = prompt("Importe a pagar");

function retornarprecioapagar(importe) {
  let importefinal;

  if (mediodepago === "efectivo") {
    importefinal = importe * efectivo;
  } else if (mediodepago === "transferencia") {
    importefinal = importe * transferencia;
  } else if (mediodepago === "tarjeta") {
    importefinal = importe * tarjeta;
  }

  alert("El importe a pagar es: " + importefinal);
}

retornarprecioapagar(importe);


