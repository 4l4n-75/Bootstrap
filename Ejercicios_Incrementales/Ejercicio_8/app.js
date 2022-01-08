// EJERCICIO INCREMENTAL 6 (condicionales)

// var nombre = prompt('Ingresa tu nombre')
// var apellido = prompt('Ingresa tus apellidos')
// var fechaNacimiento = parseInt(prompt('Ingresa tu fecha de nacimiento'))
// var cantidadCursos = parseInt( prompt('Cantidad de cursos de programacion que haz realizado'))

// console.log(nombre + ' ' + apellido)
// console.log(fechaNacimiento)
// console.log(cantidadCursos + 1)

// if (fechaNacimiento < 2000){
//     alert('¿Estas seguro que eres un programador junior?')
// }
//------------------------------------------------------------------------------------------------
// //ciclo for
// const count = 5
// let countIntern = 0;
// let valorIngresado 
// let suma = 0
// for (let i = 0; i < count; i++) {
//     console.log(countIntern)
//     countIntern = countIntern + 1;
// }
// // bucles

// while (valorIngresado != 'Salir') {
//     valorIngresado = prompt('Ingrese un numero para continuar o Salir para finalizar')
//     if(valorIngresado != 'Salir'){
//         suma = suma + parseInt(valorIngresado)
//         console.log(suma)
//     }
// }
// do {
//     valorIngresado = prompt('Ingrese un numero para continuar o Salir para finalizar')
//     if(valorIngresado != 'Salir'){
//         suma = suma + parseInt(valorIngresado)
//         console.log(suma)
//     }else{
//         alert('Hasta luego')
//     }
// } while (valorIngresado != 'Salir');

// let sumar = 0
// do {
//     valorIngresado = prompt('Introducir numero PAR para conitnuaro Salir para finalizar')
//     if(valorIngresado != 'Salir'){
//         let numParse = parseInt(valorIngresado)
//         if(numParse % 2 === 0){
//             sumar = sumar + numParse
//             if (sumar >= 100){
//                 console.log('ERROR')
//                 break
//             }
//             alert('La suma actual es '+ sumar)
//         }else{
//             alert('El numero ingresaro es impar')
//         }
//     }else{
//         alert('Hasta luego, esperamos verlo pronto')
//     }
// } while (valorIngresado != 'Salir');

//************************************************** */
//EJERCICIO INCREMENTAL 7 (iteraciones, bucles)

// Ciclos de Likes:
//- Desarrollar un programa que al ingresar por teclado la 
//- cantidad de likes que tiene el usuario en cada una de sus fotos (un ingreso por cada foto). 
//- Contar la totalidad y mostrarla por consola.
//- Verificar la cantidad de fotos con menos de 10 y mostrar un mensaje con la cantidad de las mismas.
// const fotos = 4
// let minLikes = []
// let likes
// let totalLikes = 0 
// let sumar = 0
// // const reducer = (previousValue, currentValue) => previousValue + currentValue;

// for (let i = 0; i < fotos; i++) {
//     likes = parseInt(prompt('Cuantos likes tiene la foto'))
//     minLikes.push(likes)
//     if (minLikes[i] < 10) {
//         sumar = sumar + 1 
//     }
//     // if(likes < 10 ){
//     //     minLikes.push(likes < 10)
//     //     // for (let i = 0; i < minlikes.length; i++) {
//     //     //     let sumar += minlikes[i]
//     //     // }
//     // }
//     totalLikes = totalLikes + likes
// }
// console.log('Hay un total de ' + totalLikes + ' likes')
// // alert('Hay un total de fotos con menos de 10 likes de ' + minLikes.reduce(reducer))
// document.getElementById("msm").innerText = ("Hay un total de " + totalLikes + " likes y un total de fotos con menos de 10 likes de " + sumar + " fotos")
//------------------------------------------------------------------
//FUNCIONES Y SWITCHES

// let nombre ='Alan'
// let variableFuncion = function () {
//     console.log('Hola mundo')
// }
// variableFuncion()
// function mostrarValor (){
//     let nombre = prompt('Ingresar nombres')
//     alert(`El nombre ingresado es ${nombre}`)
// }
// mostrarValor()

// let tercera = (data) => {
//     console.log(data)
// }
// tercera(nombre)
//switch
// let nombres
// let apellidos
// let edad
// let valor 
// function muestraEnPantalla (data){
//     alert(`el data ingresado es ${data}`)
// }
// do {
//     valor = prompt('Ingrese un valor\n 1. Agregar su nombre\n 2. Agregar sus apellidos\n 3. Agregar edad\n 4. Salir\n')
//     switch (valor) {
//         case '1':
//             nombres = prompt('Ingresa tu nombre')
//             muestraEnPantalla(nombres)
//             break;
//         case '2':
//             apellidos = prompt('Ingresa tus apellidos')
//             muestraEnPantalla(apellidos)
//             break
//         case '3':
//             edad = prompt('Ingresa tu edad')
//             muestraEnPantalla(edad)
//             break
//         case 'salir':
//             break
//         default:
//             alert('DEEBES INGRESAR ALGUNO DE LOS VALORES SOLICITADOS O SALIR PARA FINALIZAR')
//             break;
//     }
// } while (valor != 'salir');
//EJERCICIO INCREMENTAL 8 (funciones y switch)
// let respuesta
// function registroUsuario (data) {
//     do {
//         data = prompt('Ingrese su ID')
//         switch (data) {
//             case '1':
//                 respuesta = 'Job Daniel, fecha alta: 2021-09-16'
//                 console.log(respuesta)
//                 mostrarMes(data)
//                 break
//             case '5':
//                 respuesta = 'Juan, fecha alta: 2021-05-01'
//                 console.log(respuesta)
//                 mostrarMes(data)
//                 break
//             case '6':
//                 respuesta = 'Jose, fecha alta: 2021-01-01'
//                 console.log(respuesta)
//                 mostrarMes(data)
//                 break
//             case '14':
//                 respuesta = 'Citlalli, fecha alta: 2021-03-15'
//                 console.log(respuesta)
//                 mostrarMes(data)
//                 break
//             case '600':
//                 respuesta = 'Maria, fecha alta: 2021-03-11'
//                 console.log(respuesta)
//                 mostrarMes(data)
//                 break
//             case 'salir':
//                 alert('Hasta luego, esperamos verte pronto')
//                 break
//             default:
//                 alert('debes ingresar un ID dado de alta o salir para finalizar')
//                 break
//         }
//     } while (data != 'salir');
// }
// function mostrarMes (data) {
//     switch(data){
//         case '1':
//             console.log('09 es septiembre')
//             break
//         case '5':
//             console.log('05 es mayo')
//             break
//         case '6':
//             console.log('01 es enero')
//             break
//         case '14':
//             console.log('03 es marzo')
//             break
//         case '600':
//             console.log('03 es marzo')
//             break
//         default:
//             break
//     }
// }

// registroUsuario()

//EJERCICIO INCREMENTAL 9 (arreglos)

// let amigos = [];
// let agregar
// function agregaAmigos () {
//     do{
//         agregar = prompt('Ingresa a tu amigo o salir para finalizar')
//         if (agregar != 'salir'){
//             amigos.push(agregar)
//             for (let i = 0; i < amigos.length; i++) {
//                 amigos.sort()
//             }
//         }else{
//             alert('Esperamos verte pronto')
//             break
//         }
//     }while (agregar != 'salir')

//     return amigos
// }

// agregaAmigos()
// console.log(amigos)

//Ejercicio incremental 10

let peliculas = ['Matrix', 'Rapido y Furioso', 'Batman', 'Spider-man', 'Superman']
function inicio(){
    let seleccion
    do {
        seleccion = parseInt(prompt('Ingresa un valor\n 1. Listar peliculas\n 2. Recomendacion\n 3. Salir'))
        switch (seleccion) {
            case 1:
                peliculas.forEach(data => console.log(data))
                break;
            case 2:
                let resultado = Math.round(Math.random() * (peliculas.length - 1))
                console.log(peliculas[resultado])
                break;
            case 3:
                alert('Hasta luego, esperamos verte pronto')
                break;
            default:
                alert('Ingresa una opcion dentro del rango del menu')
                break;
        }
    } while (seleccion != 3);
}
inicio()

//Ejercicio incremental 11 (Objetos)

//Ejercicio incremental 12