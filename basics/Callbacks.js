//Callbacks
const suma =(a,b,cb)=>cb(a+b)

const imprimir=(data)=>console.log(data);

suma(1,2,imprimir)

const getData=(cb)=>{
setTimeout(()=>{
    cb({
        nombre:'Juan',
        apellido:'Cortes'
    })
},3000)    
}

const imprimirData=(data)=>console.log(data)
getData(imprimirData);