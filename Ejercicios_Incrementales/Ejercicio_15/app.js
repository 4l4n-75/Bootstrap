//EJERCICIO INCREMENTAL 15 
const url = 'https://jsonplaceholder.typicode.com/users' 
let usuarios = document.getElementById('usuarios')
async function mostrarArreglo() {
    await fetch(url)
    .then(response => response.json())
    .then(muestra)
    .catch(error => {console.error('Ocurrio un error')})
}
function muestra(data) {
    console.log(data)
    data.forEach(function (user){
        let p = document.createElement('p')
        p.textContent=user.name;
        usuarios.appendChild(p)
    })
    data.forEach(element => { 
        console.log(element.name)
    })
}
mostrarArreglo()


