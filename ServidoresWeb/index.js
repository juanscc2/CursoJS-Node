const express=require('express');

const app=express();
const PORT=3000;
app.get('/',(req,res)=>{
res.json({
    message:'Hola mundo desde express'
})
})
app.listen(PORT,()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}/`);
})