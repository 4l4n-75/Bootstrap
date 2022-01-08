const coolImages = require('cool-images')
const { Router } = require('express')
const express = require('express')
const moment = require('moment')
const server = express.Router() //Permite el trabajo con diferentes rutas

// server.get('/',(req, res)=>{
//     res.render('index', datos)
// })

//Obtenemos la hra

function traeInfo() {
    var utc = moment.utc()
console.log("La hora UTC:", utc.format('DD-MM-YYYY hh:mm:ss A'))

var hraLocal= moment().locale('mx')
console.log('La hra es:', hraLocal.format('DD-MM-YYYY hh:mm:ss A'))

var duration = moment(utc.diff(hraLocal))

console.log('hrs de diferencia: ' + duration.hours())

if(moment(hraLocal).isBefore(utc)){
    console.log('La fecha local es mayor')
}else{
    console.log('La fecha UTC es mayor')
}

// let datos={
//     imgSRC: coolImages.one(),
//     utc:utc,
//     hraLocal:hraLocal,
//     duration:duration.hours(),
// }

} 
traeInfo()