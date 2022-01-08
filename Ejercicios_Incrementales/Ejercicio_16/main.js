var express = require('express')
const server = express();

//Endpoints deben estar en una ruta especifica
server.get('/miservidor',(req, res)=>{
    res.send('Hola Mundo')
})

server.get('/fotos/1',(req, res)=>{
    res.json({
        id:1,
        title:'imagen de ejemplo',
        url: 'https://example.com/image/1'
    })
})

server.get('/error',(req,res)=>{
    res.statusCode =500
    res.json({error: 'Algo salió mal : ('})
})



server.listen(3000, ()=>{
    console.log('Servidor iniciado en el puerto 3000')
})