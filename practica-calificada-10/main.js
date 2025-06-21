async function obtenerDatos(){
let contenedor = document.querySelector(`.users-container`)/* usercontainer es el nombre de la clase que esta en el html */
try {
    let respuesta= await fetch("https://jsonplaceholder.typicode.com/users");
let verconsola= await respuesta.json();
/* console.log(verconsola) */;

    verconsola.forEach((usuario) => {
  let cards = document.createElement("div")
  cards.classList.add("card", "bg-white", "rounded-lg", "shadow-md", "p-4", "m-2", "w-full", "sm:w-1/2", "lg:w-1/3")
        cards.innerHTML=`
        <h3 class="text-xl font-semibold mb-2">Nombre:${usuario.name}</h3>
        <p>Usuario:${usuario.username}</p>
        <p>Email:${usuario.email}</p>
        <p>Empresa:${usuario.company.name}</p>
        `
        
  contenedor.appendChild(cards);
});

} catch (error) {
    console.error("Error al obtener los usuarios:", error);

    const mensajeError = document.createElement("p");
    mensajeError.textContent = "Error al cargar los usuarios. Inténtalo de nuevo más tarde.";
    mensajeError.classList.add("text-red-500", "text-center", "font-bold", "p-4");
    contenedor.appendChild(mensajeError);
}
}
obtenerDatos();