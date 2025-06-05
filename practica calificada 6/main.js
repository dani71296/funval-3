let activo = true;
let saldo=0;

    function ingresarDinero(cantidad) {
        if (cantidad > 0) {
            saldo += cantidad;
            console.log(`Depósito exitoso. Saldo actual: $${saldo}`);
        } else {
            console.log("Cantidad inválida para depositar.");
        }
    }

    function retirarDinero(cantidad) {
        if (cantidad <= 0) {
            console.log("Cantidad inválida para retirar.");
        } else if (cantidad > saldo) {
            console.log("Saldo insuficiente.");
        } else {
            saldo -= cantidad;
            console.log(`Retiro exitoso. Saldo actual: $${saldo}`);
        }
    }

    function consultarSaldo() {
        console.log(`Saldo actual: $${saldo}`);
    }

while (activo) {
  let opcion = parseInt(prompt(
    "Elige una opción:\n" +
    "1. Ingresar dinero\n" +
    "2. Retirar dinero\n" +
    "3. Consultar saldo\n" +
    "4. Salir"
  ));

  if (opcion===1){
       let cantidad = parseInt(prompt("ingresa el monto deseado"))
       ingresarDinero(cantidad)
  }
  else if(opcion===2){
    let cantidad = parseInt(prompt("ingresa el monto qeu deseas retirar"))
    retirarDinero(cantidad)
  }
  else if(opcion===3){
    consultarSaldo()
   }
   else if(opcion===4){
    console.log("gracias por usar este cajero por favor no regrese");
    activo = false;
   }
   else{
    console.log("Opción inválida. Intenta de nuevo.");
   }
}