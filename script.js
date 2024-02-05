
let titulo = document.getElementById("titulo")
titulo.innerHTML = "<h1>Calcula el precio final a pagar</h1"

let efectivo = 0.80;
let transferencia = 0.90;
let tarjeta = 1.10;
let importefinal = 0;

const boton = document.getElementById("calcularResultado");

boton.addEventListener("click", function() {
    let mediodepago = document.getElementById("mediodepago").value;
    let importe = document.getElementById("importe").value;
    calcularResultado(importe, mediodepago);
});

function calcularResultado(importe, mediodepago) {

    if (mediodepago === "efectivo") {
        importefinal = importe * efectivo;
    } else if (mediodepago === "transferencia") {
        importefinal = importe * transferencia;
    } else if (mediodepago === "credito") {
        importefinal = importe * tarjeta;
    }
    
    document.getElementById("resultado").value = importefinal.toFixed(2);
}
