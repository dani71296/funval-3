

/* let frutas=["palta", "platano", "manzana", "pera", "mandarina"];
console.log(frutas);

frutas.push("naranja");
console.log(frutas); */
/*suma los valores dentro de un array*/
/* let notas=[25,15,10,30,10,5,5];
let valor =0;
for(i=0; i<notas.length; i++){
    notas[i]
    valor= valor+notas[i]
}
console.log(valor)

let numeros=[2,3,4,5,6];
let final=0;
for (i=0; i<numeros.length;i++){
    numeros[i]
    final=numeros[i]*2
    console.log(final)

} */
/* para iterar mas facil*/
/* let estuiantes=[
    "felipe",
    "daniel",
    "rebeca",
    "juanito",
    "david",
];
estudiantes.forEach((estu) => {
    console.log(estu)
    
}); */

/*iterar usando fereach y sacar el promedio*/
/* let notasFunval = [100, 90, 10, 15, 67, 70, 0, 88];
let numfin=0;
let promedio=0;
notasFunval.forEach((notitas) => {
    numfin+=notitas
    
})
promedio= numfin/notasFunval.length
console.log(promedio)
 */
/*objetos*/
/* let persona ={
    nombre:"kevin", 
    edad: 28,
    genero: "masculino",
    pais:"bolivia",
    altura:1.65,
};
persona.edad=29;
console.log (persona); */

/* tenemos un array de estudiantes con diferentes notas quiero q me muestre un listado
de los estudiantes aprobados, se considerara aprobado aquel q tenga un promedio mayor a 51
*/

let estudiantes = [
  {
    nombre: "Marco",
    edad: 22,
    pais: "Peru", //estudiantes[0]
    notas: [100, 90, 0, 51, 85],
  },
  {
    nombre: "Pablo",
    edad: 33,
    pais: "Argentina", //estudiantes[1]
    notas: [90, 75, 0, 0, 10],
  },
  {
    nombre: "Thomas",
    edad: 21, //estudiantes[2]
    pais: "Argentina",
    notas: [51, 30, 20, 41, 85],
  },
  {
    nombre: "Woodleine",
    edad: 33, //estudiantes[2]
    pais: "Chile",
    notas: [88, 11, 33, 77, 99],
  },
  {
    nombre: "Kevin",
    edad: 28, //estudiantes[2]
    pais: "Bolivia",
    notas: [31, 30, 12, 51, 77],
  },
];

for(let i=0; i<estudiantes.length; i++ ){
    let vaca = estudiantes[i].notas
    let toro = estudiantes[i].pais
    let suma =0;
    
    for (let j=0; j<vaca.length; j++){
        suma+= vaca[j]
    }
    let promidio=suma/vaca.length;

    if (promidio>51){
        console.log(`${estudiantes[i].nombre} esta aprobado con ${promidio} `)
    }
    if (toro=== "Argentina"){
        console.log(`${estudiantes[i].nombre} es de ${toro}`)
    }
}