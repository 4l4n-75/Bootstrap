const Sequelize = require('sequelize');
// const path = 'mysql://desarrollo@localhost:3306/redsocial';
const sequelize = new Sequelize('redsocial','root','123456789',{
    dialect: 'mysql'
})

sequelize.authenticate().then(()=>{
    console.log('Conectado');
}).catch(err =>{
    console.error('Error de conexion', err);
}).finally(()=>{
    sequelize.close();
})

module.exports = sequelize

// const mysql = require('mysql2')
// const connection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '123456789',
//     database : 'redsocial'
// });

// module.exports = connection;