import {
  suma,
  resta,
  multiplicacion,
  division,
  renderizar,
  filtrarClientesConVariasCompras,
} from "./funciones.js";
import { cliente } from "./data.js";

let lista = document.querySelector("#lista-clientes");


let clientesFiltrados = filtrarClientesConVariasCompras(cliente);


for (let i = 0; i < clientesFiltrados.length; i++) {
  renderizar(clientesFiltrados[i], lista);
}

/* renderizar el cliente completo 
funcion para traer solo a los clientes q hayan realizado mas de una compra
tiempo :45 mins mas 15 min de receso
*/
