function crearBarra(id_barra){
    for(i=0;i<=16;i++){
      let div = document.createElement("div");
      div.className = "e";
      id_barra.appendChild(div);
    }
}

let ingles = document.getElementById("ingles");
crearBarra(ingles);
let portugues = document.getElementById("portugues");
crearBarra(portugues);
let español = document.getElementById("español");
crearBarra(español);
let frances = document.getElementById("frances");
crearBarra(frances);

let contadores = [-1,-1,-1,-1];
let entro = false;

function efectoIdiomas(){
    var idiomas = document.getElementById("idiomas");
    var distancia_skills = window.innerHeight - idiomas.getBoundingClientRect().top;
    if(distancia_skills >= 300 && entro==false){
        entro = true;
        const intervalingles = setInterval(function(){
        pintarBarra(ingles, 16, 0, intervalingles);
        }, 100);
        const intervalportugues = setInterval(function(){
        pintarBarra(portugues, 5, 1, intervalportugues);
        }, 100);
        const intervalespañol = setInterval(function(){
        pintarBarra(español, 11, 2, intervalespañol);
        }, 100);
        const intervalfrances = setInterval(function(){
        pintarBarra(frances, 13, 3, intervalfrances);
        }, 100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores [indice]++;
    x = contadores [indice]; 
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e"); 
        elementos[x].style.backgroundColor = "#940253";
    } 
    else{
clearInterval(interval)
     }
}

window.onscroll = function(){
    efectoIdiomas();
}