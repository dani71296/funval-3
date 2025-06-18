function aprobarExamen() {
  const aprobe = false; // Cambia esto a false para probar el otro caso

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (aprobe) {
        resolve("🎉 ¡Aprobé el examen! Estoy feliz 😄");
      } else {
        reject("😢 No aprobé el examen. Estoy triste.");
      }
    }, 2000); // espera 2 segundos simulando que tarda
  });
}

// Uso de la promesa:
aprobarExamen()
  .then((mensaje) => console.log(mensaje))   // Si apruebas
  .catch((error) => console.log(error));     // Si no apruebas
