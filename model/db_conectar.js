import mysql from 'mysql';

var conectar = mysql.createConnection({
    host: 'localhost',
    user: 'usr_tarea2',
    password: 'desarrollo2022',
    database: 'db_tarea2'
});

conectar.connect(function(err) {
    if (err) {
        console.log("Error en la conexion:"+err.stack);
        return;
    } else {
        console.log('Conexion Exitosa ID: ' + conectar.threadId);
    }
});
export {conectar};