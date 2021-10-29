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

//map
var estudiantes=['Juan','Carlos','Jose','Dayana'];
var asistencia= estudiantes.map((nombre)=>`${nombre}.`)
console.log(estudiantes);
console.log(asistencia);
console.log(estudiantes);

var productos=[
    { 
        nombre: 'camisetas',precio:15,},
    {nombre:'zapatillas',precio:20},
    {nombre:'pantalon',precio:25}
]
//Como retornar un nuevo objeto con ...
var productosImpuesto=productos.map((producto)=>{
return {
    ...producto,
    impuesto:.12
};
})
var precios=productos.map((productos)=>productos.precio)

console.log(productos);
console.log(productosImpuesto);
console.log(precios);
//Filter 
var estudiantes =[
    {nombre:'Ada',edad:20,matriculado:true},
    {nombre:'Juan',edad:21,matriculado:true},
    {nombre:'Yeison',edad:24,matriculado:true},
    {nombre:'Diana',edad:25,matriculado:false},
    {nombre:'Carlos',edad:18,matriculado:false},
]
var filtrado=estudiantes.filter((estudiante)=>estudiante.edad>=21&&estudiante.matriculado)
console.log(estudiantes);
console.log(filtrado);

//Reduce
var calificaciones=[3,5,9,10,10];
var suma=calificaciones.reduce((acumulador,calificacion)=>acumulador+calificacion,0);
console.log(calificaciones);
console.log(suma);
console.log(suma/calificaciones.length);

var edades=[21,21,23,43,21,43,18,18,23,23];

//salida

var resultado=edades.reduce((acumulador,edad)=>{
    if(!acumulador[edad]){
        acumulador[edad]=1
    }else{
        acumulador[edad]+=1
    }
    return acumulador
},{})
console.log(edades);
console.log(resultado);

var ventas=[
    {nombre:'camiseta',precio:15,totalVendido:10},
    {nombre:'zapatilla',precio:150,totalVendido:8},
    {nombre:'pantalon',precio:20,totalVendido:30},
]
var resultado=ventas.reduce((acumulador,producto)=>{
    let totalVentas=producto.precio*producto.totalVendido;
    acumulador[producto.nombre]=`$ ${totalVentas}`;
    return acumulador;
},{})
console.log(ventas);
console.log(resultado);

var estudiantes =[
    {nombre:'Ada',edad:20,matriculado:true},
    {nombre:'Juan',edad:21,matriculado:true},
    {nombre:'Yeison',edad:24,matriculado:true},
    {nombre:'Diana',edad:25,matriculado:false},
    {nombre:'Carlos',edad:18,matriculado:false},
];

var resultado=estudiantes
.map((estudiante)=>estudiante.matriculado)
.reduce((acumulador,item)=>{
    if(item){
        acumulador.matriculado+=1
    }else{
acumulador.noMatriculado+=1
    }
    return acumulador;
},{matriculado:0,noMatriculado:0})
console.log(estudiantes);
console.log(resultado);
//Practica
var jugadoresFutbol=[
    {nombre:'Leo Messi',edad:33,equipo:'PSG',golesMarcados:120},
    {nombre:'Cristiano Ronaldo',edad:35,equipo:'Manchester United',golesMarcados:110},

]
var resultado=jugadoresFutbol.reduce((acumulador,jugador)=>{
let totalGolesCarrera=jugador.golesMarcados*jugador.edad;
acumulador[jugador.nombre]=totalGolesCarrera;
return acumulador;
},{})
console.log(jugadoresFutbol);
console.log(resultado);

//some-every
var numeros=[1,3,5,7,9];
var resultado=numeros.some((numero)=>numero%2==0);
console.log(resultado);
//every
var numeros=[2,4,6,8,10];
var resultado=numeros.every((numero)=>numero%2==0);
console.log(resultado);
//find-- findIndex
var clientes=[
    {id:1,nombre:'Juan'},
    {id:2,nombre:'Julian'},
    {id:3,nombre:'Camila'},
    {id:4,nombre:'Rosalba'},
    {id:5,nombre:'Luis'},
]
var cliente=clientes.find((cliente)=>cliente.id===1);
var clienteFilter=clientes.filter((cliente)=>cliente.id===1);
console.log(clientes)
console.log(cliente);
console.log(clienteFilter);
//FindIndex
var clientes=[
    {id:1,nombre:'Juan'},
    {id:2,nombre:'Julian'},
    {id:3,nombre:'Camila'},
    {id:4,nombre:'Rosalba'},
    {id:5,nombre:'Luis'},
]
var posicion=clientes.findIndex((cliente)=>cliente.id==2);
console.log(posicion);
console.log(clientes[posicion]);

//Includes
var mascotas=['perro','gato','conejo'];
var resultado=mascotas.includes('gato');
console.log(resultado);
console.log('Juan'.includes('an'));

var buscador=(parametro)=>{
   let clientes=[
        {id:1,nombre:'Juan'},
        {id:2,nombre:'Julian'},
        {id:3,nombre:'Camila'},
        {id:4,nombre:'Rosalba'},
        {id:5,nombre:'Luis'},
    ]
    return clientes.filter((cliente)=>cliente.nombre.includes(parametro));
}
console.log(buscador('i'));

//Join

var elementos=['aire','fuego','agua'];
var resultado=elementos.join('--');
console.log(resultado);
var clientes=[
    {id:1,nombre:'Juan'},
    {id:2,nombre:'Julian'},
    {id:3,nombre:'Camila'},
    {id:4,nombre:'Rosalba'},
    {id:5,nombre:'Luis'},
]
var csvGenerator=(array,separator=',')=>{
    let header=Object.keys(array[0]).join(separator);
let data = array.map((element)=>Object.values(element).join(separator))
console.log(header);
data.forEach((element=>console.log(element)));
}
csvGenerator(clientes);

// concat--sort--splice--slice
var array1=[1,2,3,4,5];
var array2=[6,7,8,9,0];
var array3=array1.concat(array2);
var array4=[...array1,...array2];
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
//Sort 
var array1=[1,2,3,4,5,6,7,8,9,0];
console.log(array1.sort());

var meses=['Dic','Ene','Mar','Feb',];
console.log(meses.sort());

var array=[1,10000,21,30,4];
var ordenado=array.sort((a,b)=>a-b);
console.log(ordenado);

//splice
var nombres=['Juan','Sebastian','Jackson'];
nombres.splice(1,1,'Jose');
console.log(nombres);
//slice 
var nombres=['Juan','Sebastian','Jackson'];
var resultado=nombres.slice(1,3); //no incluye la ultima posicion
console.log(resultado);
console.log(nombres);
