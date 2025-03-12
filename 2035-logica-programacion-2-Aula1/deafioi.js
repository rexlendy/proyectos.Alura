
holaMundo();
holaNombre("camila");
numeroFuncion(6);
promedio(1.2,3.7,4.0);
numeroMayor(2,9);
multiplicarseElmismo(3);



function holaMundo(){
    let mensaje = "hola mundo";
    console.log(mensaje);
}

function holaNombre(nombre) {
    console.log(`hola ${nombre}`);
    
}

function numeroFuncion(num) {
    let doble = num *2; 
    return console.log(doble);
}

function promedio(num1,num2,num3) {
    let promedio = (num1+num2+num3)/2;
    return console.log(promedio); 
}
function numeroMayor(numero1,numero2) {
    if(numero1>numero2){
        console.log(`el numero mayor es el ${numero1}`);
    }else{
        console.log(`el numero mayor es el ${numero2}`);
    }
    
}
function multiplicarseElmismo(nuemro) {
    let resultado = nuemro * nuemro;
    return console.log(resultado);
}

