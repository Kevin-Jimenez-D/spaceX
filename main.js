//Se extrae desde el archivo v3.js
import { getAllImgMis } from "./storage/v3.js";
import { getAllImgRoc } from "./storage/v4.js";
//Se visualiza en la consola lo que se esta exportando
let launches = await getAllImgMis();
//console.log(launches);              //Para visualizar que los launches esten todo en orden en la consola

let rockets = await getAllImgRoc();
console.log(rockets);