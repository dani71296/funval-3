document.addEventListener("DOMContentLoaded", () => {
  const celdas = document.querySelectorAll("[data-index]");
  const turnoSpan = document.querySelector("#turno span");
  const btnReiniciar = document.getElementById("reiniciar");
  const marcadorX = document.getElementById("ganadas-x");
  const marcadorO = document.getElementById("ganadas-o");
  const marcadorEmpates = document.getElementById("empates");

  let turno = "X";
  let tablero = Array(9).fill(null);
  let ganadasX = 0;
  let ganadasO = 0;
  let empates = 0;
  let terminado = false;

  const combinaciones = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  function actualizarTurno() {
    turnoSpan.textContent = turno;
    turnoSpan.className = turno === "X" ? "text-blue-600" : "text-yellow-600";
  }

  function actualizarMarcadores() {
    marcadorX.textContent = `Ganadas X: ${ganadasX}`;
    marcadorO.textContent = `Ganadas O: ${ganadasO}`;
    marcadorEmpates.textContent = `Empates: ${empates}`;
  }

  function revisarGanador() {
    for (let combo of combinaciones) {
      const [a, b, c] = combo;
      if (tablero[a] && tablero[a] === tablero[b] && tablero[b] === tablero[c]) {
        return tablero[a];
      }
    }
    return null;
  }

  function manejarClick(index) {
    if (tablero[index] || terminado) return;

    tablero[index] = turno;
    celdas[index].textContent = turno;

    const ganador = revisarGanador();

    if (ganador) {
      terminado = true;
      if (ganador === "X") ganadasX++;
      else ganadasO++;
      actualizarMarcadores();
      setTimeout(() => {
        alert(`¡Ganó ${ganador}!`);
        reiniciar();
      }, 100);
    } else if (!tablero.includes(null)) {
      empates++;
      terminado = true;
      actualizarMarcadores();
      setTimeout(() => {
        alert("¡Empate!");
        reiniciar();
      }, 100);
    } else {
      turno = turno === "X" ? "O" : "X";
      actualizarTurno();
    }
  }

  function reiniciar() {
    tablero = Array(9).fill(null);
    celdas.forEach(c => c.textContent = "");
    turno = "X";
    terminado = false;
    actualizarTurno();
  }

  // Inicialización
  actualizarTurno();
  actualizarMarcadores();
  celdas.forEach((celda, i) => {
    celda.addEventListener("click", () => manejarClick(i));
  });
  btnReiniciar.addEventListener("click", reiniciar);
});
