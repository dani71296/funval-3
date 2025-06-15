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
    // Insertar imagen en contenedor y contenedor al DOM
    div.appendChild(img);
    contenedor.appendChild(div);
  });

  //evento para cerrar
    document.getElementById("cerrar-modal").addEventListener("click", () => {
    document.getElementById("modal").classList.add("hidden");
  });
}
// validacion de formulario
let formulario = document.querySelector("#mensaje form");
formulario.addEventListener("submit",function (e) {
  e.preventDefault(); /* evita el envio del formulario antes de tiempo */
  let nombre = formulario.nombre.value.trim();/* para obtener el nombre y le quita espacios extra */
  let correo = formulario.correo.value.trim();
  let mensaje = formulario.mensaje.value.trim();
  /* para validar el correo */
  let esCorreoValido = /\S+@\S+\.\S+/.test(correo);
  /* verificar si algun campo esta vaio */
  if (!nombre || !correo || !mensaje) {
  alert("Por favor, completa todos los campos.");
  return;
  }
  /* verificacion si el correro es invalido */
  if (!esCorreoValido) {
  alert("El correo electrónico no es válido.");
  return;
  }
  /* si todo esta bien se agradece y se resetea el formulario */
  else{
    alert("¡Gracias por tu mensaje!");
    /* formulario.reset(); ya no resetear porque no llega nada */
    formulario.submit(); 
  }

})