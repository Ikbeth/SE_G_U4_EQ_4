const sql = require('mssql')

const config = {
    user:'sa',
    password:'123456789',
    server:'localhost',
    database:'SE_G_ProyectoFinal_EQ_4',
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }
}

const getConnection = async function (){
    try{
        const conexion = await sql.connect(config) //conexion es el objeto que representa la conexion logica con la base de datos
        return conexion
    }
    catch(error){
        console.log(error)
    }    
}

module.exports = {
    getConnection
}
