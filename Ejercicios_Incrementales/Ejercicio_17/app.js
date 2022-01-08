class Usuario {
    cursos =['Historia','Geografia','Quimica', 'Desarrollo web']
    total(){
        this.cursos.forEach(curso => console.log(curso))
        return "termine"
    }

} 

module.exports = Usuario

// function mostrar() {
//     usuario.forEach(curso => console.log(curso))
 
// }

// mostrar()