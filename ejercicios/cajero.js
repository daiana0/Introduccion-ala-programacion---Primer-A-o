alert("§ Bienvenido a Tanelco §");
const usuarioValido = "usuario";
const passValida = "1234";
let usuario = prompt("Ingrese su Usuario por favor");
let pass = prompt("Ingrese su clave numérica");

if (usuario !== usuarioValido || pass !== passValida) {
  alert("Usuario o contraseña incorrectos. Inténtelo de nuevo.");
} else {
  let saldoActual = 10000;
  let dineroAextraer;
  let opcion;
  do {
    opcion = prompt("Seleccione la opción que desee realizar: \n⒈Consultar saldo \n⒉Extraer dinero \n⒊Salir");
    /* pasar opcion a numero */
    switch (parseInt(opcion)) {
      case 1:
        alert("Su saldo actual es: $" + saldoActual);
        break;
      case 2:
        dineroAextraer = parseFloat(prompt("Ingrese el monto que desee retirar"));
        /* Convertir la entrada a número */
        if (isNaN(dineroAextraer) || dineroAextraer <= 0 || dineroAextraer > saldoActual) {
          alert("Monto inválido o Dinero insuficiente");
        } else {
          saldoActual -= dineroAextraer;
          alert(`Su extracción de $ ${dineroAextraer} resultó existosa y su saldo actual es: ${saldoActual}`);
        }
        break;
      case 3:
        alert("Gracias por utilizar los sevicios de Tanelco");
        break;
      default:
        alert("Opción no válida");
        break;
    }
  } while (opcion != "3");
}
