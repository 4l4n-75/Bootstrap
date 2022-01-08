const express = require('express')
const app = express(); //--->creamos un objetos de tipo express
require('dotenv').config() //-----> Para crear las variable de entorno
app.use(express.urlencoded()) //--->nos permite hacer un parse del body al JSON lo que se 
                            //    recibe dentro del body los convertira en objetos
//configuramos el puerto                            
app.listen(process.env.PORT, process.env.HOST, () =>{console.log(`Servidor funcionando en ${process.env.HOST} ${process.env.PORT} `)})

// comenzamos a trabajar con las rutas
app.get('/', (req, res) => { //Se genera la respuesta de la peticion GET en el puerto Raiz
    console.log(req.query); 
    let parametros = req.query   //Obtenemos los parametros que se envian
    res.status(200).json({          //GET nos permite enviar parametros en la ruta
        msg:`Respuesta desde node`
    });
})
app.post('/usuario', (req, res) => {  //POST son para enviar informacion
    console.log(req.body);
    let body = req.body
    res.status(200).json({
        msg:`Respuesta con la ruta /usuario con metodo post ${body.nombre}`
    })

})