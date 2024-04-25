const usuarioValido = "Paula";
const passValida = "1234";
let usuario, pass;
let saldoCuenta = 80;

do {
    usuario = prompt("Ingrese su Usuario por favor");
    pass = prompt("Ingrese su clave numérica");

        if (usuario !== usuarioValido || pass !== passValida) {
            alert("Usuario o contraseña incorrectos. Inténtelo de nuevo.");
        }
    } while (usuario !== usuarioValido || pass !== passValida);
  let opcion;
  do {
    opcion = parseInt(prompt("Ingrese la opción deseada:\n1. Consultar saldo\n2. Retirar dinero\n3. Salir"));
    switch (opcion) {
        case 1:
          alert("Su saldo es " + saldoCuenta);
          break;
        case 2:
          let montoRetirar = parseInt(prompt("Ingrese el monto a retirar"));
          validarMonto(montoRetirar);
          break;
        case 3:
          alert("Gracias por usar nuestros servicios.");
          break;
        default:
          alert("Opción inválida. Por favor, seleccione una opción válida.");
      }
    } while (opcion !== 3);
    
    function validarMonto(monto) {
      if (!isNaN(monto) && monto >= 0 && monto < saldoCuenta) {
        saldoCuenta = saldoCuenta - monto;
        alert("Se retiraron " + monto);
        alert("Su saldo restante es " + saldoCuenta);
      } else if (monto > saldoCuenta) {
        alert("Su saldo " + saldoCuenta + " No es suficiente para retirar " + monto);
      } else {
        alert("Debe ingresar un monto válido");
      }
    }