const Motor = require("./Motor/Motor.js");
const Tanque = require("./Motor/Tanque.js");
const Carburador = require('./Motor/Carburador.js')

let carburador = new Carburador(200, 1);
let nafta = new Tanque();
nafta.cargarNafta(38);
let auto1 = new Motor(nafta.nafta, carburador);

auto1.encender();
carburador.acelerar()












console.log(auto1.nafta);
// auto1.apagar()


console.log(nafta);
// console.log(auto1);
