var operando1;
var operando2;
var operador;

function digitaOperando (numero){
    let visor = getVisor()

    if(operador == ''){
        operando1 = operando1 + numero;
        visor.innerHTML = operando1;
    }else {
        operando2 = operando2 + numero;
        visor.innerHTMl = operando2;
    }
   
}

function digitaOperador(simbolo){
    let visor = getVisor()
    operador = simbolo;
    visor.innerHTML = operando1 + ' ' + operador;
}

function executa(){
    let resultado =0;
    let visor = getVisor()
    let op1 = parseInt(operando1);
    let op2 = parseInt(operando2);
    switch(operador){
        case '+': resultado = operando1 + operando2; break;
        case '-': resultado = operando1 - operando2; break;
        case '/': resultado = operando1 / operando2; break;
        case 'x': resultado = operando1 * operando2; break;
    }

    visor.innerHTML = operando1 + ' ' + operador + ' ' + operando2 + ' = ' + resultado;
}
function limpa(){
    let visor = getVisor()
    operando1 = '';
    operando2 = '';
    operador ='';
    visor.innerhtml ='';
}

function getVisor(callback) {
    let visor = document.getElementById("visor");

    callback();

    return visor;
}