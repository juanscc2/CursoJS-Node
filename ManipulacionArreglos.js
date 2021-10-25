/**Manipulacion de arreglos */

/**For Each */
/**Recorrer los elementos de un arreglo */
var letras=['a','b','c','d','e'];
letras.forEach((elemento)=> console.log(elemento));

/**Push-shift-pop */
var letras=['a','b','c','d','e'];
letras.push('f');
console.log(letras);
var primerElemento=letras.shift();
console.log(primerElemento);
console.log(letras);
var ultimoElemento=letras.pop();
console.log(ultimoElemento);
console.log(letras);

