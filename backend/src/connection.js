const mysql = require('mysql');

let conexion = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'joinjobs'
    }
)

conexion.connect(
    function(err){
        
        if (err) throw err;

        console.log("La base de datos se conectó con exito!");
    }
)

module.exports = conexion;