function suma(a, b) {
  let resultado = a + b;
  return resultado;
}

function resta(a, b) {
  let resultado = a - b;
  return resultado;
}

function multiplicacion(a, b) {
  let resultado = a * b;
  return resultado;
}

function division(a, b) {
  let resultado = a / b;
  return resultado;
}

function renderizar(cliente, elemento) {
  elemento.innerHTML += `
    <li>
      <strong>Nombre:</strong> ${cliente.nombre} <br>
      <strong>Edad:</strong> ${cliente.edad} <br>
      <strong>Correo:</strong> ${cliente.correo} <br>
      <strong>Compras:</strong> ${cliente.compras.length} <br><br>
    </li>
  `;
}

function filtrarClientesConVariasCompras(clientes) {
  return clientes.filter((c) => c.compras.length > 1);
}

export { suma, resta, multiplicacion, division, renderizar, filtrarClientesConVariasCompras };
