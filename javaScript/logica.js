console.log('Esta funcionando bien')

let numero1
let numero2
let resultado

document.getElementById("btnCalcular").onclick = function(){
    const opcionSeleccionada = document.getElementById('Opciones').value
    if(opcionSeleccionada === "suma"){
        numero1 = parseFloat(document.getElementById('numero1').value)
        numero2 = parseFloat(document.getElementById('numero2').value)
        resultado = numero1 + numero2
        document.getElementById('EtiquetaResultado').innerHTML = "El resultado de la suma de las dos variables es: " + resultado
    }else{
        document.getElementById('EtiquetaResultado').innerHTML = "No seleccionaste suma"
    }    
    if(opcionSeleccionada === "resta"){
        resultado = numero1 - numero2
        document.getElementById('EtiquetaResultado').innerHTML = "El resultado de la resta de las dos variables es: " + resultado
    }else{
    }    
    if(opcionSeleccionada === "multiplicacion"){
        resultado = numero1 * numero2
        document.getElementById('EtiquetaResultado').innerHTML = "El resultado de la multiplicacion de las dos variables es: " + resultado
    }else{
    }    
    if(opcionSeleccionada === "division"){
        resultado = numero1 / numero2
        document.getElementById('EtiquetaResultado').innerHTML = "El resultado de la division de las dos variables es: " + resultado
    }

    
}
