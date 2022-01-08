//EJERCICIO INCREMENTAL 14 

const url = 'https://randomuser.me/api' 

let foto 
let nombre 
let edad
let correo
let celular

function getUsuariosRandom() {
    fetch(url)
        .then(response => response.json())
        .then(imprime)
        .catch(error =>{
            console.error('Ocurrio un error al solicitar los datos')
        })
}
function imprime(data) {
    console.log(data)
    let usuario = data['results'][0]
    nombre = usuario.name.first + ' ' + usuario.name.last
    let nom = document.getElementById('name')
    nom.innerHTML += nombre
    console.log(nombre)
    edad = usuario.dob.age
    let age = document.getElementById('age')
    age.innerHTML = edad
    console.log(edad)
    correo = usuario.email
    let email = document.getElementById('email')
    email.innerHTML = correo
    console.log(correo)
    celular = usuario.phone
    let phone = document.getElementById('phone')
    phone.innerHTML = celular
    console.log(celular)
    foto = usuario.picture.medium
    let img = document.getElementById('imagen')
    img.src = foto
}
// function boton() {
//     let boton = document.getElementById('button')
//     boton.addEventListener('click', modifyText)
// }
getUsuariosRandom()

