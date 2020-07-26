let puntuacionUsuario = 0;
let puntuacionOrdenador = 0;
const puntuacionUsuario_span = document.getElementById("puntuacion-usuario");
const puntuacionOrdenador_span = document.getElementById("puntuacion-ordenador");
const puntuacion_div = document.querySelector(".puntuacion");
const resultado_p = document.querySelector(".resultado > p");
const piedra_div = document.getElementById("pi");
const papel_div = document.getElementById("pa");
const tijeras_div = document.getElementById("ti");

function getEleccionOrdenador(){
    const elecciones = ['pi', 'pa' , 'ti'];
    const randomNum = Math.floor(Math.random()*3);
    return elecciones[randomNum];
}

function legible(silaba){
  if (silaba === "pi") return "Piedra";
  if (silaba === "pa") return "Papel";
  return "Tijeras";
}

function victoria(eleccionUsuario,eleccionOrdenador){
    const usuarioChiquito = "Usuario".fontsize(3).sub();
    const ordenadorChiquito = "Ordenador".fontsize(3).sub();
    const eleccionUsuario_div = document.getElementById(eleccionUsuario);
    puntuacionUsuario++;
    puntuacionUsuario_span.innerHTML = puntuacionUsuario;
    puntuacionOrdenador_span.innerHTML = puntuacionOrdenador;
    resultado_p.innerHTML = `${legible(eleccionUsuario)}${usuarioChiquito} vence a ${legible(eleccionOrdenador)}${ordenadorChiquito}. Tu ganas!`;
    eleccionUsuario_div.classList.add('green-glow');
    setTimeout(function() { eleccionUsuario_div.classList.remove('green-glow')}, 300);
}



function derrota(eleccionUsuario,eleccionOrdenador){
    const usuarioChiquito = "Usuario".fontsize(3).sub();
    const ordenadorChiquito = "Ordenador".fontsize(3).sub();
    const eleccionUsuario_div = document.getElementById(eleccionUsuario);
    puntuacionOrdenador++;
    puntuacionUsuario_span.innerHTML = puntuacionUsuario;
    puntuacionOrdenador_span.innerHTML = puntuacionOrdenador;
    resultado_p.innerHTML = `${legible(eleccionUsuario)}${usuarioChiquito} pierde contra ${legible(eleccionOrdenador)}${ordenadorChiquito}. Has perdido! :(`;
    eleccionUsuario_div.classList.add('red-glow');
    setTimeout(function() { eleccionUsuario_div.classList.remove('red-glow')}, 300);
}

function empate(eleccionUsuario,eleccionOrdenador){
    const usuarioChiquito = "Usuario".fontsize(3).sub();
    const ordenadorChiquito = "Ordenador".fontsize(3).sub();
    const eleccionUsuario_div = document.getElementById(eleccionUsuario);
    resultado_p.innerHTML = `${legible(eleccionUsuario)}${usuarioChiquito} es igual a ${legible(eleccionOrdenador)}${ordenadorChiquito}. Es un empate!`;
    eleccionUsuario_div.classList.add('gray-glow');
    setTimeout(function() { eleccionUsuario_div.classList.remove('gray-glow')}, 300);
}

function juego(eleccionUsuario){   
    const eleccionOrdenador = getEleccionOrdenador();
    switch(eleccionUsuario + eleccionOrdenador){
        case "piti":
        case "papi":
        case "tipa":
            victoria(eleccionUsuario,eleccionOrdenador);
            break;
        case "pipa":
        case "pati":
        case "tipi":
            derrota(eleccionUsuario,eleccionOrdenador);
            break;
        case "pipi":
        case "papa":
        case "titi":
            empate(eleccionUsuario,eleccionOrdenador);
            break;
        

    }
}


function main() {
    piedra_div.addEventListener('click', function() {
        juego("pi");
    })
    
    papel_div.addEventListener('click', function() {
        juego("pa");
    })
    
    tijeras_div.addEventListener('click', function() {
        juego("ti");
    })
}

main();