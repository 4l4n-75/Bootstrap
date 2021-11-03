// EJERCICIO INCREMENTAL 7 (iteraciones, bucles)

// Ciclos de Likes:
//- Desarrollar un programa que al ingresar por teclado la 
//- cantidad de likes que tiene el usuario en cada una de sus fotos (un ingreso por cada foto). 
//- Contar la totalidad y mostrarla por consola.
//- Verificar la cantidad de fotos con menos de 10 y mostrar un mensaje con la cantidad de las mismas.
const fotos = 4
let minLikes = []
let likes
let totalLikes = 0 
let sumar = 0
// const reducer = (previousValue, currentValue) => previousValue + currentValue;

for (let i = 0; i < fotos; i++) {
    likes = parseInt(prompt('Cuantos likes tiene la foto'))
    minLikes.push(likes)
    if (minLikes[i] < 10) {
        sumar = sumar + 1 
    }
    // if(likes < 10 ){
    //     minLikes.push(likes < 10)
    //     // for (let i = 0; i < minlikes.length; i++) {
    //     //     let sumar += minlikes[i]
    //     // }
    // }
    totalLikes = totalLikes + likes
}
console.log('Hay un total de ' + totalLikes + ' likes')
// alert('Hay un total de fotos con menos de 10 likes de ' + minLikes.reduce(reducer))
document.getElementById("msm").innerText = ("Hay un total de " + totalLikes + " likes y un total de fotos con menos de 10 likes de " + sumar + " fotos")