/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego Rox';
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Escoje un número del 1 al 100:';*/
let elementoHTML;
let numeroSecreto = 0;
let intentos = 0;
let numerosAcumulados = [];
let numeroGenerado;
let numeroMax = 5;

function condiconesIniciales(){
    etiquetasHTML('h1','Juego Rox');
    etiquetasHTML('p',`Escoje un número del 1 al ${numeroMax}`);
    numeroSecreto = GeneraNumeroSecreto();
    intentos = 1;
}

function etiquetasHTML(elemento, TextoElemnt){
    elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = TextoElemnt;
    return;
}

function GeneraNumeroSecreto(){
    numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
    console.log(`numero generado: ${numeroGenerado}`);
    console.log(`lista: ${numerosAcumulados}`);
    //si ya salieron todos los numeros, podemos mostrar en pantalla un mensaje y cerrar el juego
    if(numerosAcumulados.length == numeroMax){
        etiquetasHTML('p', 'El juego se termino');
    }
    else{
        //el método incluides recorre toda la lista comparando el parametro con los elementos, si el parametro es igual 
        // a algún elemento de la lista, devuelve un true
        if(numerosAcumulados.includes(numeroGenerado)){
            return GeneraNumeroSecreto();
        }
        else{
            numerosAcumulados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarEntrada(){
    document.querySelector('#entradaUsuario').value = '';
}

//console.log(`El número secreto es: ${numeroSecreto}`);

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('entradaUsuario').value);
    console.log(`intentos: ${intentos}`);

    if(numeroDeUsuario === numeroSecreto){
        etiquetasHTML('p',`Adivinaste el número secreto en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
     }
    else{
        if(numeroDeUsuario > numeroSecreto){
            etiquetasHTML('p','El número secreto es menor');
        }
        else{
            etiquetasHTML('p','El número secreto es mayor');
        }
        intentos++;
        limpiarEntrada();   
        }
    return;
}


function reiniciarJuego(){
    //limpiar entrada
    limpiarEntrada();
    //Colocar mensaje de inicio de juego
    //Generar número aleatorio
    //reiniciar la variable intentos
    condiconesIniciales();
    //deshabilitar el botón reiniciar juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condiconesIniciales();

