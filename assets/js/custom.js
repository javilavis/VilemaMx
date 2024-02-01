function calcularValor(valor){
    try{
        let valorInmueble = document.getElementById("valorInmueble").value;
        let pagoMensual = document.getElementById("pagoMensual");
        pago = valor / 100
        pagoMensual.innerHTML = "$"+pago
    }catch(e){console.error("Ocurrió un error al simular el crédito")}
}

function mostrarMision() {
    document.getElementById("seccion-mision").style.display = "block"
    document.getElementById("botonConoce").style.display = "none"
    document.getElementById("mostrarMenos").style.display = "block"
    
}
function ocultarMision() {
    document.getElementById("seccion-mision").style.display = "none"
    document.getElementById("botonConoce").style.display = "block"
    document.getElementById("mostrarMenos").style.display = "none"
    
}