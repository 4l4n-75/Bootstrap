class Users{
    nombre = 'Daniel';
    apellido = 'Hernandez';
    email='danielhernandez@gmail.com';
    telefono='555-555';
    fullname = function(){
        return this.nombre + ' ' + this.apellido; 
    }
}

module.exports = Users;