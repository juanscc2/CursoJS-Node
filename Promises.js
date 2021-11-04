//Promises

const getData=(error)=> new Promise((resolve,reject)=>{
if(!error){
    setTimeout(()=>{
        resolve({
            nombre:'Juan',
    apellido:'Cortes'})
    }
    ,3000)
}else{
    reject('No pudimos obtener los datos')
}
    });

const getData2=(error)=> new Promise((resolve,reject)=>{
    if(!error){
        setTimeout(()=>{
            resolve({
                nombre:'Ana',
        apellido:'Cheverry'})
        }
        ,3000)
    }else{
        reject('No pudimos obtener la data 2')
    }
        });
        console.log('Inicio');
getData(false)
.then((data)=>{
    console.log(data);
    return getData2(true)
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
console.log(error);
})
console.log('Fin');    
//Asyn-Await





