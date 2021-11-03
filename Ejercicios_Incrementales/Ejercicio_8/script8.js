//EJERCICIO INCREMENTAL 8 (funciones y switch)
let respuesta
function registroUsuario (data) {
    do {
        data = prompt('Ingrese su ID')
        switch (data) {
            case '1':
                respuesta = 'Job Daniel, fecha alta: 2021-09-16'
                console.log(respuesta)
                mostrarMes(data)
                break
            case '5':
                respuesta = 'Juan, fecha alta: 2021-05-01'
                console.log(respuesta)
                mostrarMes(data)
                break
            case '6':
                respuesta = 'Jose, fecha alta: 2021-01-01'
                console.log(respuesta)
                mostrarMes(data)
                break
            case '14':
                respuesta = 'Citlalli, fecha alta: 2021-03-15'
                console.log(respuesta)
                mostrarMes(data)
                break
            case '600':
                respuesta = 'Maria, fecha alta: 2021-03-11'
                console.log(respuesta)
                mostrarMes(data)
                break
            case 'salir':
                alert('Hasta luego, esperamos verte pronto')
                break
            default:
                alert('debes ingresar un ID dado de alta o salir para finalizar')
                break
        }
    } while (data != 'salir');
}
function mostrarMes (data) {
    switch(data){
        case '1':
            console.log('09 es septiembre')
            break
        case '5':
            console.log('05 es mayo')
            break
        case '6':
            console.log('01 es enero')
            break
        case '14':
            console.log('03 es marzo')
            break
        case '600':
            console.log('03 es marzo')
            break
        default:
            break
    }
}

registroUsuario()
