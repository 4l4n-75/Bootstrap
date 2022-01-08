//Ejercicio incremental 13
// console.log('Esto se muestra primero')
// setTimeout(()=>{
//     console.log('Esto se muestra segundo')
// }, 2000)
// console.log('Esto se muestra tercero')

// let myArray = [1,2,3,4,5]
// console.log(intercambio(myArray, 1, 2))
// //---------------------------------
//(API's, promesas, json)
//--------------------------------- 
const url = 'https://api.github.com/users/'
let resultado;

function getUsuariosGit (id){
    let urlId = url + id

    fetch(urlId)
        .then(response => response.json())
        .then(json =>{
            console.log(json)
            resultado = json
        })
        .catch(error =>{
            console.log('Ocurrio un error al solicictar los datos')

        })
}

getUsuariosGit('4l4n-75')
console.log(resultado)
console.log(resultado.url)