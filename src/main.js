import Cliente from './cliente.js'
import Impuestos from './impuesto.js'

//Creando a cliente y su impuesto
let impCliente1 = new Impuestos(1500000, 250000);
let cliente1 = new Cliente('Alex Montecinos', impCliente1);
console.log(cliente1)
console.log(impCliente1)

//Probando Setter
//Clase Cliente
cliente1.nombre = 'Alexander Montecinos';
//Clase Impuesto
impCliente1.montoBrutoAnual = 2000000;
impCliente1.deducciones = 400000;

console.log(cliente1)
console.log(impCliente1)

//Imprimiento en consola cálculo impuesto
console.log(`Valor Impuesto : $${cliente1.calcularImpuesto(impCliente1.montoBrutoAnual,impCliente1.deducciones)}`);
