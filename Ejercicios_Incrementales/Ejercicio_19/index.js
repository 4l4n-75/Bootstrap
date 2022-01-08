const express = require('express');
// const conexion = require('datadb');
const app = express(); // server
const sequelize = require('./conexionDB.js');
app.listen(3000, 'localhost', () => console.log('Puerto arriba'))

async function findAllRows() {
    sequelize.query("SELECT * FROM usuario", {type: sequelize.QueryTypes.SELECT})
    .then(
        function (personas) {
            console.log(personas)
        }
    )
}
findAllRows();
