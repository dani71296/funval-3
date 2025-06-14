function mostrarHabilidades() {
  const contenedor = document.getElementById('contenedor-habilidades');
  
  habilidades.forEach(habilidad => {
    // Crear contenedor
    const div = document.createElement('div');
    div.className = "flex justify-center"; // opcional: centra la imagen

    // Crear imagen
    const img = document.createElement('img');
    img.src = habilidad.imagen;
    img.alt = habilidad.nombre;
    img.title = habilidad.nombre;
    img.className = "h-20 object-contain rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 cursor-pointer";

    // Evento al hacer click
    img.addEventListener("click", () => {
      document.getElementById("modal-img").src = habilidad.imagen;
      document.getElementById("modal-titulo").textContent = habilidad.nombre;
      document.getElementById("modal-desc").textContent = habilidad.descripcion;
      document.getElementById("modal").classList.remove("hidden");
    });
    //evento para cerrar
    document.getElementById("cerrar-modal").addEventListener("click", () => {
    document.getElementById("modal").classList.add("hidden");
  });

    // Insertar imagen en contenedor y contenedor al DOM
    div.appendChild(img);
    contenedor.appendChild(div);
  });
}