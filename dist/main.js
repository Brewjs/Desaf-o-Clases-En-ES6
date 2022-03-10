"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Creando a cliente y su impuesto
var impCliente1 = new _impuesto["default"](1500000, 250000);
var cliente1 = new _cliente["default"]('Alex Montecinos', impCliente1);
console.log(cliente1);
console.log(impCliente1); //Probando Setter
//Clase Cliente

cliente1.nombre = 'Alexander Montecinos'; //Clase Impuesto

impCliente1.montoBrutoAnual = 2000000;
impCliente1.deducciones = 400000;
console.log(cliente1);
console.log(impCliente1); //Imprimiento en consola cálculo impuesto

console.log("Valor Impuesto : $".concat(cliente1.calcularImpuesto(impCliente1.montoBrutoAnual, impCliente1.deducciones)));