/*Calculadora por medio de pago donde el usuario puede ver el importe a pagar, segun el medio de pago elegido*/

let nombre = prompt("Ingresa tu nombre")
alert("Bienvenido " + nombre)
console.log("Bienvenido " + nombre)

const pago = ['efectivo 20% descuento', 'transferencia 10% descuento', 'tarjeta 10% de recargo']
alert(pago);
console.log("Elegi tu medio de pago: efectivo 20% descuento, transferencia 10% descuento, tarjeta 10% de recargo");

let mediodepago = prompt("Ingresa el medio de pago: efectivo, transferencia o tarjeta");
let importe = parseInt(prompt("Ingresa el monto total"));


if((mediodepago =="efectivo")  &&  (importe !="")) {
    let pagoefectivo = importe * 0.8;
    alert("El importe a pagar es: " + pagoefectivo);
    console.log("El importe a pagar es: " + pagoefectivo);
}

if( (mediodepago =="transferencia")  &&  (importe !="")) {
    let pagotransferencia = importe * 0.9;
    alert("El importe a pagar es: " + pagotransferencia);
    console.log("El importe a pagar es: " + pagotransferencia);    
} 

if( (mediodepago =="tarjeta")  &&  (importe !="")) {
    let pagotarjeta = importe * 1.10;
    alert("El importe a pagar es: " + pagotarjeta);
    console.log("El importe a pagar es: " + pagotarjeta);  
} 


