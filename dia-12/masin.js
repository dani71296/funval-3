/* let numeroX=parseInt(prompt("ingresa un numero please"));
let pares=2;
for(let j=1; j<=numeroX; j++){
    console.log(pares);
    pares+=2;
} */

/* ejercicio 2 */
/* let numeroy=parseInt(prompt("ingresa un numero please"));
let quintos=5;
for(let j=1; j<=numeroy; j++){
    console.log(quintos);
    quintos+=5;
} */
/* ejercicio calculadora*/
/* let num=parseInt(prompt("ingresa el numero base"));
let exp=parseInt(prompt("ingresa el multiplo"));
let resultado=1;

for(let i=1; i<=exp; i++ ) {
    resultado=resultado*num
}
console.log(`${num} elevado a ${exp} es ${resultado}`); */

/*funciiones*/
/* function eliminaEspacios(cadena) {
    let resultado="";
    for(let i=0; i< cadena.length; i++){
        if (cadena[i] !== " "){
            resultado=resultado+cadena[i]
        }
    }
    return resultado;    
}
console.log(eliminaEspacios("daniel tu de la ")) */
/*leer numeros hata que el ususario coloca uno negativo */
let num;
do{
    num=parseInt(prompt("ingrese un numero"))
    console.log(num)
}
while(num>=0);
alert("has ingresado un numero negativo imbesil")