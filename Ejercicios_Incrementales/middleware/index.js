const express = require('express')
const server = express()

function validarDato(req, res, next) {
    res.json('Datos Invalidos')
    return next()
}

function validarUsuario(req, res, next){
    res.json('Datos invalidos')
    return next()
}

server.get('/demo', validarDato, (req, res)=>{
    res.json('Hola mundo')
})
server.listen(3000, ()=>{
    console.log('Servidor inicializado')
})