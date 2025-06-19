let contenedor = document.querySelector("#contenedor-cards");
let pokemons = [];

async function traerPokemons(n) {
  pokemons = [];
  for (let i = n; i <= n + 11; i++) {
    let { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
    pokemons.push(data);
    renderizarPokes(pokemons);
  }
}
traerPokemons(1);

const typeColors = {
  grass: "bg-green-600",
  water: "bg-blue-600",
  fire: "bg-red-600",
  electric: "bg-yellow-400",
  bug: "bg-lime-600",
  normal: "bg-gray-400",
  poison: "bg-purple-600",
  ground: "bg-yellow-700",
  fairy: "bg-pink-400",
  fighting: "bg-red-700",
  psychic: "bg-pink-600",
  rock: "bg-yellow-800",
  ghost: "bg-indigo-600",
  dark: "bg-gray-700",
  dragon: "bg-indigo-800",
  ice: "bg-blue-200",
  steel: "bg-gray-500",
  flying: "bg-sky-400",
};

function renderizarPokes(pokemons) {
  let contenedor = document.querySelector("#contenido-principal");
  contenedor.innerHTML = "";
  pokemons.forEach((pokemon) => {
    contenedor.innerHTML += `<div class="card flex flex-col items-center justify-center">
          <div id="cont-img" class="bg-gray-100 rounded-xl">
            <img
              src="${pokemon.sprites.other["official-artwork"].front_default}"
              alt=""
            />
          </div>
          <div
            id="cont-pkm"
            class="flex flex-col justify-start w-full p-2 gap-1"
          >
            <h3 class="text-gray-500 font-semibold">#000${pokemon.id}</h3>
            <h2 class="text-2xl">${pokemon.name}</h2>
            <div id="tipos" class="flex gap-2">
            
              ${pokemon.types
                .map((tipo) => {
                  const colorClass =
                    typeColors[tipo.type.name] || "bg-gray-300";
                  let respuesta = `
                  <p class="${colorClass} text-white px-4 rounded-xs w-[30%] text-center">
                    ${tipo.type.name}
                  </p>`;
                  return respuesta;
                })
                .join("")}
            </div>
          </div>
        </div>`;
  });
}

let ant = document.querySelector("#ant");
let sig = document.querySelector("#sig");
let pokeNumeros = 1;
sig.addEventListener("click", function (e) {
  if (pokeNumeros !== 1025) {
    pokeNumeros += 12;
    contenedor.innerHTML = "";
    traerPokemons(pokeNumeros);
  }
});

ant.addEventListener("click", function (e) {
  if (pokeNumeros !== 1) {
    pokeNumeros -= 12;
    contenedor.innerHTML = "";
    traerPokemons(pokeNumeros);
  }
});

let listaTipos = document.querySelector("#listado-clases");

async function renderizarTipos() {
  listaTipos.innerHTML = "";
  let { data } = await axios.get("https://pokeapi.co/api/v2/type/");
  let arrayTipos = data.results;
  arrayTipos.forEach((tipo) => {
    listaTipos.innerHTML += ` <li>
               <a
      href="#"
      class="tipo-link block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      data-tipo="${tipo.name}"
                >${tipo.name}</a
              >
            </li>`;
  });
  setTimeout(() => {
  let enlaces = document.querySelectorAll(".tipo-link");
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", async function (e) {
      e.preventDefault();
      menu.classList.add("hidden");
      let tipoSeleccionado = this.dataset.tipo;
      console.log("Tipo clickeado:", tipoSeleccionado); // Para verificar que funciona

      // Paso siguiente: limpiar <main> y mostrar los 10 pokémon de ese tipo
    

    // 🔴 1. Obtener los datos del tipo desde la PokéAPI
    let { data } = await axios.get(`https://pokeapi.co/api/v2/type/${tipoSeleccionado}/`);
    let pokemones = data.pokemon.slice(0, 10); // Solo los primeros 10

    // 🔴 2. Limpiar el contenido de <main>
    let main = document.querySelector("#contenido-principal");
    main.innerHTML = `<h2 class="text-2xl font-bold mb-4 capitalize">Pokémon tipo ${tipoSeleccionado}</h2>`;

    // 🔴 3. Mostrar los primeros 10 pokémon
    let lista = document.createElement("ul");
    lista.className = "grid grid-cols-2 md:grid-cols-3 gap-4";

let pokemons = [];

for (let i = 0; i < 10; i++) {
  let pokeURL = pokemones[i].pokemon.url;

  try {
    let respuesta = await axios.get(pokeURL);
    pokemons.push(respuesta.data);
  } catch (error) {
    console.error("Error al obtener detalles de:", pokeURL, error);
  }
}

// Llamar a tu función personalizada para renderizar
renderizarPokes(pokemons);

    });
  });
}, 100);
}

renderizarTipos();

let btn = document.querySelector("#boton-drop");
let menu = document.querySelector("#dropdown");
btn.addEventListener("click", function (e) {
  menu.classList.toggle("hidden");
});

/* darle funcionalidad al dropdwn y filtrar a los pokemon de dicho tipo 
si le da a tipo fuego deberan aparecer todos los pokemon de tipo fuego si le da a tipo agua solo pokemon
tipo agua deberan aparecer ademas el drpdwn debera cerrarse cuando se selecione una opcion  */
