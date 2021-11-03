//EJERCICIO INCREMENTAL 9 (arreglos)

let amigos = [];
let agregar
function agregaAmigos () {
    do{
        agregar = prompt('Ingresa a tu amigo o salir para finalizar')
        if (agregar != 'salir'){
            amigos.push(agregar)
            for (let i = 0; i < amigos.length; i++) {
                amigos.sort()
            }
        }else{
            alert('Esperamos verte pronto')
            break
        }
    }while (agregar != 'salir')

    return amigos
}

agregaAmigos()
console.log(amigos)