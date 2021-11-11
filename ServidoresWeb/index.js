const express=require('express');

const Service=require('./src/service');
const app=express();
const PORT=3000;
app.use(express.json());

app.get('/',(req,res)=>{
res.json({
    message:'Lista de usuarios',
    body:Service.getUsers(id)
})
});
app.get('/:id',(req,res)=>{
    let{
        params:{id},
    }=req;
    let user=Service.getUser();
    res.json({
        message:`Usuario ${id}`,
        body:user
        ,
    })
    });



app.post('/',(req,res)=>{
let newUser=req.body;

res.status(201).json({
message:'Usuario ha sido creado',
body:Service.createUser(newUser)
})
})

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});