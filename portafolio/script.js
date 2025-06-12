function mostrarHabilidades() {
  const contenedor = document.getElementById('contenedor-habilidades');
  habilidades.forEach(habilidad => {
    const div = document.createElement('div');
    div.innerHTML = `
      <img src="${habilidad.imagen}" alt="${habilidad.nombre}" title="${habilidad.nombre}"
        class="h-20 object-contain rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-120">`;
    contenedor.appendChild(div);
  });
}