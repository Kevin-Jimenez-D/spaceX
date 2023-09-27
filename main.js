//Se extrae desde el archivo v3.js
import { getAllImgMis } from "./storage/v3.js";
//Se visualiza en la consola lo que se esta exportando
let res = await getAllImgMis();
console.log(res);