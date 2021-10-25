/**Funciones */
/**Declarativa */

function saludar(){
    console.log('Hola soy Juan');
}

saludar();

function saludar(nombre){
console.log(`Hola soy ${nombre}`);
}
saludar('Juan');

function saludar(nombre){
    
return `Hola soy ${nombre}`
}
var saludo=saludar('Juan');
console.log(saludo);
console.log(saludar('Juan Sebastian'));


//Expresion--o anonimas
var suma =function(numero1,numero2){
return numero1+numero2;
}
console.log(suma(10,15));
//Arrow-function
var restar =(a,b)=>{
return a-b;
}
console.log(restar(5,3));

var multiplicar=(a,b)=>a*b;
console.log(multiplicar(5,3));

