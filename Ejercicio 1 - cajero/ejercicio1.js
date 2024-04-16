let saldo = 135;

let usuario = 'Daiana Aguero';

usuario = prompt ('Hola, ingrese su usuario?');
alert('Su saldo actual es de $' + saldo);

let montoRetirar = parseInt (prompt('Ingrese el monto que desee retirar:'));
validarMonto(montoRetirar);
function validarMonto (monto){}
if ( ! isNaN (montoRetirar) && montoRetirar >=0 && montoRetirar < saldo) {
    saldo = saldo - montoRetirar;
    alert ('Su extracción fué de $' + montoRetirar);
    alert('El saldo restante que queda en la cuenta es de $' + saldo);
}
 else if(montoRetirar > saldo) {
    alert ('Su saldo actual de $' + saldo + ', no es suficiente para retirar $' + montoRetirar + ' por favor ingrese un monto menor');
 } 
 else {alert ('Ingrese un monto válido')}