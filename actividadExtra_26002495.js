
let numero;
do{

let numeroRandom= Math.floor(Math.random()*9)+1;


numero=prompt('Ingrese un numero del 1 al 9');
while((numero<1)||(numero>9)){
    alert('el numero no esta en el rango indicado');
    numero=prompt('Ingrese un numero del 1 al 9');
};

let adivinanza=prompt('Cree que el numero ingresado es menor,mayor o igual al que genero al computadora?');


switch(adivinanza){

    case "mayor":
        if(numeroRandom>numero)alert(`La computadora eligió ${numeroRandom}, usted eligió ${numero}. Su elección es menor ¡Ha adivinado!`);
        else{
            if(numero==numeroRandom)alert(`La computadora eligió ${numeroRandom}, usted eligió ${numero}. Su elección es igual ¡Ha perdido!`);
            else alert(`La computadora eligió ${numeroRandom}, usted eligió ${numero}. Su elección es mayor ¡Ha perdido!`);
        };
        break;
    case "igual":
        if(numero==numeroRandom)alert(`La computadora eligió ${numeroRandom}, usted eligió ${numero}. Su elección es igual ¡Ha adivinado!`);
        else{
            if(numero>numeroRandom)alert(`La computadora eligió ${numeroRandom}, usted eligió ${numero}. Su elección es mayor ¡Ha perdido!`);
            else alert(`La computadora eligió ${numeroRandom}, usted eligió ${numero}. Su elección es menor ¡Ha perdido!`);
        };
        break;
    case "menor":
        if(numero<numeroRandom)alert(`La computadora eligió ${numeroRandom}, usted eligió ${numero}. Su elección es menor ¡Ha adivinado!`);
        else{
            if(numero>numeroRandom)alert(`La computadora eligió ${numeroRandom}, usted eligió ${numero}. Su elección es mayor ¡Ha perdido!`);
            else alert(`La computadora eligió ${numeroRandom}, usted eligió ${numero}. Su elección es igual ¡Ha perdido!`);
        };
        break;
    default:
        alert('opcion invalida');

}

numero=parseInt(prompt('si desea volver a jugar ingrese el numero 1'));

}while(numero==1);