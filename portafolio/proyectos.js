const proyectos = [
  {
    titulo: "Portafolio Web",
    descripcion: "Un portafolio personal hecho con HTML, CSS y JavaScript.",
    imagen: "./images/portafolio.jpg"
  },
  {
    titulo: "Tienda Online",
    descripcion: "Simulación de carrito de compras con JavaScript.",
    imagen: "./images/teinda.jpg"
  },
  {
    titulo: "pagina water rafting",
    descripcion: "Pagina web para una empresa de water raffting",
    imagen: "./images/waterrafting.jpg"
  },
  {
    titulo: "Control de invenatarios",
    descripcion: "una aplicaion donde se puede ver en tiempo real el inventario de un almacen",
    imagen: "./images/inventario.webp"
  },
  {
    titulo: "pagina web de musica",
    descripcion: "Pagina web de una empresa que ofrece servicios musicales online",
    imagen: "./images/muscia.webp"
  },
  {
    titulo: "Pagina web de un albergue de mascotas",
    descripcion: "Pagina donde se puede ver la organizacion y  colaboracion con el albergue.",
    imagen: "./images/albergue.webp"
  }
  
];

function mostrarProyectos() {
  const contenedor = document.getElementById('proyectos');
  proyectos.forEach(proyecto => {
    const div = document.createElement('div');
    div.className = 'bg-blue-500 rounded-lg p-4 shadow-lg hover:scale-105 transition-transform duration-300';

    div.innerHTML = `

      <img src="${proyecto.imagen}" alt="${proyecto.titulo}" 
        class="object-contain rounded-full mb-4 mx-auto"
        style="width: 200px; height: 150px;" />
      <h3 class="text-xl font-bold mb-2 text-center">${proyecto.titulo}</h3>
      <p class="text-center">${proyecto.descripcion}</p> `;  
    contenedor.appendChild(div);
  });
}
