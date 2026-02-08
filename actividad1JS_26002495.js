let mes=parseInt(prompt('Ingrese su mes de nacimiento'));
let dia=parseInt(prompt('Ingrese su dia de nacimiento'));
class Zodiaco{
     
     constructor(dia,mesInicio,diaFinal,mesFinal,Nombre){
        this.dia=dia;
        this.mesInicio=mesInicio;
        this.diaFinal=diaFinal;
        this.mesFinal=mesFinal;
        this.Nombre=Nombre;
     }

}

let signos=[];
signos.push(new Zodiaco(21,3,19,4,"Aries"));
signos.push(new Zodiaco(20,4,20,5,"Tauro"));
signos.push(new Zodiaco(21,5,20,6,"Géminis"));
signos.push(new Zodiaco(21,6,22,7,"Cáncer"));
signos.push(new Zodiaco(23,7,22,8,"Leo"));
signos.push(new Zodiaco(23,8,22,9,"Virgo"));
signos.push(new Zodiaco(23,9,22,10,"Libra"));
signos.push(new Zodiaco(23,10,21,11,"Escorpio"));
signos.push(new Zodiaco(22,11,21,12,"Sagitario"));
signos.push(new Zodiaco(22,12,19,1,"Capricornio"));
signos.push(new Zodiaco(20,1,18,2,"Acuario"));
signos.push(new Zodiaco(19,2,20,3,"piscis"));

function Signo(){

signos.forEach(e=>{

    if(((mes==e.mesInicio)&&(dia>=e.dia))||((mes==e.mesFinal)&&(dia<=e.diaFinal))){
        
        alert('su signo sodiacal es :'+e.Nombre);
       
    }


})

}

Signo();