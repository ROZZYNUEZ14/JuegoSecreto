let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = numeroRandom();
let intentos = 1;


function asignandoTextoElemento(elemento, texto){
    let contendioAsignado = document.querySelector(elemento);
    contendioAsignado.innerHTML= texto;
}

function numeroRandom(){
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length === numeroMaximo){
        asignandoTextoElemento("p", "Ya se sortearon todos los numeros posibles")
    }else{
            //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return numeroRandom();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}


function botonVerificarIntento(){
    let valorInput = parseInt(document.getElementById("valorUsuario").value)
    console.log(valorInput)
    console.log(numeroSecreto)
    console.log(typeof(valorInput))
    console.log(typeof(numeroSecreto))
    console.log(valorInput === numeroSecreto)

    if(numeroSecreto === valorInput){
        asignandoTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`)
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(valorInput > numeroSecreto){
            asignandoTextoElemento("p", "El número secreto es menor")
        }else{
            asignandoTextoElemento("p", "El número secreto es mayor")
        }
        intentos++;
        limpiarCaja()
    }

    return;
}

function limpiarCaja(){
    document.getElementById("valorUsuario").value = " ";
}

function condicionesIniciales(){
    asignandoTextoElemento(".texto__parrafo", "Indica un número del 1 al 10");
    asignandoTextoElemento("h1", "Adivina el número secreto");
    numeroSecreto = numeroRandom();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
