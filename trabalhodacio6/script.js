const cria = document.getElementById("b");
const btn = document.getElementById("btn");

const estados = {
    normal:  "b_n.png",
    puto: "b_p.png",
    morto: "b_d.png",
    comendo: "b_c.png",
    alimentado: "b_a.png",
}

let contador = 0; 
let intervalo = null;
let time_click = null;
let time_out = null;

function controlador (){
    if(intervalo) clearInterval(intervalo)
        
        intervalo = setInterval(() => {
            contador++;

            console.log("tempo:",contador);
            
            if (contador == 30){
                cria.src = estados.puto;
            }

            if(contador == 60){
                cria.src = estados.morto;
            }
        }, 1000);
}
function alimentar() {

    img.src = imagens.clicado;
    contador = 0;

    console.log("Comendo");

    if (timeoutClique) clearTimeout(timeoutClique);

    timeoutClique = setTimeout(() => {
        img.src = imagens.feliz;

        timeoutBack = setTimeout(() => {
            img.src = imagens.normal;
        }, 2000);

    }, 1000);
}

controlador();
