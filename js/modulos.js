import saludar, {Saludar,PI,usuario} from "./constantes.js";
import {aritmetica as calcular} from "./aritmetica.js";

console.log("modulos  modulos.js")

console.log(PI,usuario)

console.log(calcular.sumar(3,7));
console.log(calcular.restar(7,4));
saludar();

let saludo = new Saludar("loco");
saludo;
console.log(saludo.name)