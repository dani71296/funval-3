let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");
let parrafo= document.querySelector("#parrafo");
let contador=0;
btn.addEventListener("click", function(){
    contador++;
    parrafo.textContent=contador;
});
btn2.addEventListener("click", function(){
    contador--;
    parrafo.textContent=contador;
});