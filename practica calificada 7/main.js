const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
];
productos.forEach(producto => {
    console.log(`${producto.nombre}: $${producto.precio}`);
});
const productosDisponibles = productos.map(producto => producto.nombre);
console.log(" Productos disponibles:", productosDisponibles);

const productoBuscado = prompt("¿Qué producto estás buscando?");
const disponible = productosDisponibles.includes(productoBuscado);

if (disponible) {
    console.log(` ${productoBuscado} está disponible.`);
} else {
    console.log(` ${productoBuscado} no está disponible.`);
}


const productosConDescuento = productos.map(producto => ({
    nombre: producto.nombre,
    precio: (producto.precio * 0.9) // para el 10% de descuento
}));

console.log(productosConDescuento);
const productosBaratos = productos.filter(producto => producto.precio < 100);

console.log(productosBaratos);

const primerosDos = productos.slice(0, 2);
console.log(primerosDos);

const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log(productosOrdenados);
