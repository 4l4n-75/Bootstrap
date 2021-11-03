//EJERCICIO INCREMENTAL 6 (condicionales)

var nombre = prompt('Ingresa tu nombre')
var apellido = prompt('Ingresa tus apellidos')
var fechaNacimiento = parseInt(prompt('Ingresa tu fecha de nacimiento'))
var cantidadCursos = parseInt( prompt('Cantidad de cursos de programacion que haz realizado'))

console.log(nombre + ' ' + apellido)
console.log(fechaNacimiento)
console.log(cantidadCursos + 1)

if (fechaNacimiento < 2000){
    alert('¿Estas seguro que eres un programador junior?')
}