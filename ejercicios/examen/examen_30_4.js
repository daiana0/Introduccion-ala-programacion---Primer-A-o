let opcion;

do {
    opcion = prompt('Bienvenidos a La cooperativa "La Perdedora". Por favor elija una opción:\n1. Ver stock actual.\n2. Ingresar calidad del silo y del maíz.\n3. Salir');

    if (opcion === '1') {
        alert('El stock actual en el silo principal de "LA PERDEDORA" es de 1500 toneladas');
    } else if (opcion === '2') {
        alert('El stock actual en el silo principal de "LA PERDEDORA" es de 1500 toneladas');

        const cantidadRecibida = 3000;
        let calidadSilo = parseInt(prompt('Ingrese un número del 1 al 10 según el operario considere la calidad del silo'));

        if (!isNaN(calidadSilo) && calidadSilo <= 10 && calidadSilo >= 7) {
            alert('CALIDAD DEL SILO EXCELENTE');
            let calidadMaiz = prompt('Ingrese la calidad del maíz, según: "limpio", "cuerposExtraños", "humedad" ');

            let cantidad = 1500;
            cantidad = manejarCalidadMaiz(cantidad, calidadMaiz, cantidadRecibida);
        } else if (calidadSilo < 7) {
            alert('CALIDAD DEL SILO MUY MALA, avisar de inmediato al personal a cargo');
        } else {
            alert('Por favor ingrese un número válido del 1 al 10');
        }
    } else if (opcion !== '3') {
        alert('Opción no válida.');
    }
} while (opcion !== '3');

function manejarCalidadMaiz(cantidad, calidadMaiz, cantidadRecibida) {
    let nuevoStock; 
    switch (calidadMaiz) {
        case "limpio":
            nuevoStock = cantidad + cantidadRecibida;
            alert("El maíz limpio se ha almacenado en el silo principal. El stock será de " + nuevoStock);
            break;
        case "cuerposExtraños":
            nuevoStock = cantidadRecibida;
            alert("El maíz contiene cuerpos extraños. Las " + cantidadRecibida + " toneladas se enviarán al Silo 2. ");
           alert('el stock actual en el silo principal es de: ' +cantidad);
            break;
        case "humedad":
            nuevoStock = cantidadRecibida;
            alert("El maíz tiene humedad.  Las " + cantidadRecibida + " toneladas se enviarán al Silo 3.");
            alert('el stock actual en el silo principal es de: ' +cantidad);
            break;
        default:
            alert("Calidad de maíz no reconocida.");
    }
   
    
}

