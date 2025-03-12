//asignar el valor que devuelve la funcion y almacenar en la variable 
let numeroAleatorio = 0;
let intentos = 0; 
let numerosSorteados= [];
let numeroMaximo = 10;
///////buena practica //////////////

// funcion para modificar los textos de las etiquetas 
function colocarTexto(elemento,texto){
    let elementoHTML=  document.querySelector(elemento);//Selector= seleccionar un elemento 
    elementoHTML.innerHTML = texto; //cambiar o asignar texto a un elemento 
    return;
}

colocarTexto("h1", "juego numero secreto actualizado");
colocarTexto("p", "indica un numero del 1 al 100");


//funcion del evento -> onclick = "validar informacion"
function validarInformacion(){
    let valorUsuario = parseInt(document.getElementById("numeroUsuario").value);
    if(valorUsuario=== numeroAleatorio){ // con este codigo sin el Parseint estariamos comparando un  string "numeroUusario" con un entero "numeroAleatorio" pero si colocamos parseint estamos comparando dos numeros enteros  ya podriamos utilizar los tres iguales que son de comparacion  // exigente y se puede utilizar por que los datos que estamos comparando son dos int si no utilizarmos el int   // estariamos comparando un entero con un int
        document.getElementById('reiniciar').removeAttribute('disabled');// en esta linea de codigo se activa el boton de reiniciarnuevo juego una vez el jugador alla acertado
        colocarTexto('p',`acertaste el numero en  ${intentos} ${intentos === 1 ? "intento" : "intentos"}`);
    }else{
        if(valorUsuario < numeroAleatorio){
            colocarTexto('p','el numero es mayor');
        }else{
            colocarTexto('p','el numero es menor');
        }
        limpiarCaja()
        intentos++;
    }
    return;
   
}

//funcion para limpiar caja de texto
function limpiarCaja(){
    return document.querySelector('#numeroUsuario').value ="";   
}

/// funcion para generra un numero aleatorio 
function generarNumAleatorio(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numerosSorteados); 
    console.log(numeroGenerado);
    //si ya sorteamos todos los numeros 
    if(numerosSorteados.length == numeroMaximo){
        colocarTexto('p','ya se sortiaron todos los numeros pisibles');
    }else{
    if(numerosSorteados.includes(numeroGenerado)){
        return generarNumAleatorio();

    }else{
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}  
}

function condicionesIniciales(){
    limpiarCaja();
    colocarTexto("h1", "juego numero secreto actualizado");
    colocarTexto("p", `indica un numero del 1 al ${numeroMaximo}`);
    numeroAleatorio = generarNumAleatorio();
    intentos = 1;

}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    //desabilitar el boton de nuevo juego 
    document.querySelector("#reiniciar").setAttribute('disabled','true');
    
}
condicionesIniciales();


////////// manera novata /////////////////
/*

let titulo = document.querySelector('h1');
titulo.innerHTML = "juego de numero secretoaaa";

let parrafo = document.querySelector('p');
parrafo.innerHTML = "indica un numero del 1 - 10";

function intentoDeUsuario(){// una funcion es un encapsulamineto de una accion que queremos que haga 
 alert("click")
}
 */







