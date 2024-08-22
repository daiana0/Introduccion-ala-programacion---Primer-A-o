let siloSoja = {
  capacidadMax: 3000,
  stockActual: 2500,
};

let siloMaiz = {
  capacidadMax: 3000,
  stockActual: 2000,
};

function ingresoCamion() {
  var opcion;
    do {
    opcion = prompt("Bienvenidos a La planta de Silos de Mendoza, por favor elija una opción:\n1. Ver stock actual.\n2. Ingresar una carga.\n3. Salir");
    
    if (opcion === '1') {
      alert("El stock actual en el Silo de Maíz es de: " +siloMaiz.stockActual+ " toneladas y en el silo de Soja es de: " +siloSoja.stockActual+ " toneladas");
    } else if (opcion === '2') {
      alert("INGRESO DE CARGA:");
      let tipoCereal = prompt("¿Usted va a ingresar maíz o soja?").toLowerCase();
      let pesoCarga = parseFloat(prompt("Ingrese el peso de la carga en toneladas"));

      if (!isNaN(pesoCarga) && pesoCarga > 0) {
        alert("El peso ingresado es de: " + pesoCarga + " toneladas");

        /* determinar el silo correspondiente */
        let siloCorrespondiente;

        switch (tipoCereal) {
          case "soja":
            siloCorrespondiente = siloSoja;
            break;
          case "maiz":
            siloCorrespondiente = siloMaiz;
            break;
          case "maíz":
            siloCorrespondiente = siloMaiz;
            break;
          default:
            alert('Ingrese "maíz" o "soja"');
            return;
        }

        let nuevoStock = siloCorrespondiente.stockActual + pesoCarga;
        if (nuevoStock <= siloCorrespondiente.capacidadMax) {
          siloCorrespondiente.stockActual = nuevoStock;
          alert(`Camión ingresado correctamente. Nuevo stock de ${tipoCereal}: ${siloCorrespondiente.stockActual} toneladas`);
        } else {
          alert(`No hay suficiente espacio en el silo de ${tipoCereal}. Stock actual: ${siloCorrespondiente.stockActual} toneladas, y tiene una capacidad maxima de ${siloCorrespondiente.capacidadMax}`
          );
        }
      } else {
        alert("Ingrese un peso correcto en toneladas");
      }
    } else if (opcion === '3') {
      alert("Saliendo...");
    } else {
      alert("Opción incorrecta. Por favor elija 1, 2 o 3.");
    }

  } while (opcion !== '3');
}
ingresoCamion();




