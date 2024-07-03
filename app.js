let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asginarTextoElemento (elemento, texto){
    let elementoHTML= document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(numeroIntentos);
    if(numeroDeUsuario===numeroSecreto){
        asginarTextoElemento("p",`Acertaste el numero en ${numeroIntentos} ${(numeroIntentos===1) ? "intento" : "intentos"}`)
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acertó
        if (numeroDeUsuario>numeroSecreto){
            asginarTextoElemento("p","El numero secreto es menor");
        }else {
            asginarTextoElemento("p","El numero secreto es mayor");
        }
        numeroIntentos++;
    }
    return;
}

function limpiarCaja() {
document.querySelector("#valorUsuario").value = "";

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo) { 
        asginarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
 } else { 
    //Si el numero generado está incluido en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)) { 
        return generarNumeroSecreto();
    }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
  }
  
}
function condicionesIniciales() {
    asginarTextoElemento("h1","Juego del numero secreto");
    asginarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo} `)
    numeroSecreto = generarNumeroSecreto ();
    intentos =1;
}

function reiniciarJuego() {
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
     //inicializar el numero de intentos
     condicionesIniciales();
    //necesito deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");

    
}

condicionesIniciales();

