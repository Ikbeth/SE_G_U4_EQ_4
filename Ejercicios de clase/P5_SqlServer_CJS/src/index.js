const {getConnection} = require('./conexion')

const sql = require('mssql')


const checkConexion = async function(){
        const SQL_QUERY = 'SELECT GETDATE() AS FECHA_COMPLETA'
        const conexion = await getConnection()

        console.log("Conexion Realizada con Exito!")
        
        const result = await conexion.request().query(SQL_QUERY)

        console.log(`Datos devueltos de la Query de prueba...`)

        console.log(result.recordset)  //DEVUELVE UNA LISTA DE OBJETOS

        console.log(result.recordset[0]) //DE LA LISTA DE OBJETOS SOLO SE RECUPERA UN OBJETO (EL PRIMERO EN ESTE CASO)

        console.log(result.recordset[0].FECHA_COMPLETA) //SE ACCEDE A UNA DE LAS PROPIEDADES DEL OBJETO DEVUELTO

}

checkConexion()


const deleteUsuario = async function(){
    const SQL_QUERY = 'DELETE USUARIOS FROM USUARIOS WHERE ID_USUARIO = @ID'
    const conexion = await getConnection()
    const result = await conexion
    .request()        
        //.input("ID", sql.Int, 10 )        
        .input("ID", 2 )        
         .execute(SQL_QUERY)
    console.log(result)
}

//deleteUsuario()


const updateUsuario = async function(){
    const SQL_QUERY = 'UPDATE USUARIOS SET nombre=@nombre WHERE ID_USUARIO = @ID'
    const conexion = await getConnection()
    const result = await conexion
    .request()        
        .input("nombre", sql.VarChar, "Nuevo Nombre" )        
        .input("ID", 10 )        
         .query(SQL_QUERY)
    console.log(result.recordset)
}

//updateUsuario()

// LISTO
const sp_SelectALL_SensorsInfo = async function(){    
    const conexion = await getConnection()
    const result = await conexion
    .request()        
        //.input("nombre", sql.VarChar, "Nuevo Nombre" )        
        //.input("ID", 10 )        
         .execute('SP_SelectALL_records')
    console.log(result.recordset)
}

sp_SelectALL_SensorsInfo()

// LISTO
const sp_select_sensor = async function(id_sensor){    
    const conexion = await getConnection()
    const result = await conexion
    .request()        
        //.input("nombre", sql.VarChar, "Nuevo Nombre" )        
         .input("id_sensor", sql.Int, id_sensor)        
         .execute('sp_select_sensor')
    console.log(result.recordset[0])
}

//sp_select_sensor(3)

// LISTO
const SP_Insert_SensorRecords = async function(id_sensor){
    const conexion = await getConnection()
    const result = await conexion
    .request()        
        //.input("nombre", sql.VarChar, "Nuevo Nombre" )        
         .input("id_sensor", sql.Int, id_sensor)      
         //.input("current_value", sql.Int, current_value)        
         .execute('sp_select_sensor')
    console.log(result)
}

//SP_Insert_SensorRecords(1)