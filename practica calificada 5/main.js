// menú principal
console.log("Calculadora de Áreas");
console.log("1. Calcular el área de un cuadrado");
console.log("2. Calcular el área de un rectángulo");
console.log("3. Calcular el área de un triángulo");

// Pedimos al usuario que seleccione una opción
let opcion = prompt("Ingresa el número de la figura que quieres calcular (1, 2 o 3):");

// Convertir la opción a número
opcion = Number(opcion);

if (opcion === 1) {
    // Área del cuadrado
    let lado = prompt("Ingresa el valor del lado del cuadrado:");
    lado = Number(lado);
    let area = lado * lado;
    console.log("El área del cuadrado es: " + area);
    }

else if (opcion === 2) {
    // Área del rectángulo
    let base = prompt("Ingresa la base del rectángulo:");
    let altura = prompt("Ingresa la altura del rectángulo:");
    base = Number(base);
    altura = Number(altura);
    let area = base * altura;
    console.log("El área del rectángulo es: " + area);
    }

else if (opcion === 3) {
    // Área del triángulo
    let base = prompt("Ingresa la base del triángulo:");
    let altura = prompt("Ingresa la altura del triángulo:");
    base = Number(base);
    altura = Number(altura);
    let area = (base * altura) / 2;
     console.log("El área del triángulo es: " + area);
    }

else {
    // Opción inválida
    console.log("Error: Opción no válida. Por favor ingresa 1, 2 o 3.");
}
