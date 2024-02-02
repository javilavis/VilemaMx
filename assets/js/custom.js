function formatearPesos(valor){
    const floatValue = parseFloat(valor);
    if (!isNaN(floatValue)) {
        const formattedValue = floatValue.toLocaleString('es-MX', {
            style: 'currency',
            currency: 'MXN',
            maximumFractionDigits: 2
        });
        return formattedValue;
    }
}

function calcularValor(valor){
    try{
        // let valorInmueble = document.getElementById("valorInmueble").value;
        let pagoMensual = document.getElementById("pagoMensual");
        let enganche = document.getElementById("enganche");
        let engancheValue = formatearPesos(valor * .10);
        let value = formatearPesos(valor/72) ;
        pagoMensual.innerHTML = value ;
        enganche.innerHTML = engancheValue
        
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