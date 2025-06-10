const proyectos = [
  {
    titulo: "Portafolio Web",
    descripcion: "Un portafolio personal hecho con HTML, CSS y JavaScript.",
    imagen: "./images/portafolio.jpg"
  },
  {
    titulo: "Tienda Online",
    descripcion: "Simulación de carrito de compras con JavaScript.",
    imagen: "./images/tienda.jpg"
  }
];

function mostrarProyectos() {
  const contenedor = document.getElementById('proyectos');
  proyectos.forEach(proyecto => {
    const div = document.createElement('div');
    div.className = 'bg-blue-800 rounded-lg p-4 shadow-lg hover:scale-105 transition-transform duration-300';

    div.innerHTML = `
      <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="w-full h-40 object-cover rounded mb-4">
      <h3 class="text-xl font-bold mb-2">${proyecto.titulo}</h3>
      <p>${proyecto.descripcion}</p>
    `;
    
    contenedor.appendChild(div);
  });
}
