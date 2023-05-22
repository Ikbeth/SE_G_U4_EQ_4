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

const sp_selectAll_sensorInfo = async function(){    
    const conexion = await getConnection()
    const result = await conexion
    .request().execute('sp_selectAll_sensorInfo')
    return result.recordset
}

const sp_selectall_records  = async function(){    
    const conexion = await getConnection()
    const result = await conexion
    .request().execute('sp_selectall_records ')
    //console.log(result.recordset)
    return result.recordset
}

const sp_select_sensor = async function(id_sensor){    
    const conexion = await getConnection()
    const result = await conexion
    .request()                      
         .input("id_sensor", sql.Int, id_sensor )        
         .execute('sp_select_sensor')
    return result.recordset[0]
}
//sp_select_sensor(1)

const sp_insert_sensor_record = async function(id_sensor, current_value){

    console.log("id_sensor: ", id_sensor, " current_value:", current_value)

    const conexion = await getConnection()
    const result = await conexion
    .request()                
         .input("id_sensor", sql.Int, id_sensor )        
         .input("current_value", sql.Int, current_value  )        
         .execute('sp_insert_sensorrecords')
    //console.log(result)
    return "{\"Resultado\": \"Insercion Correcta\"}"
}

const sp_insert_new_sensor = async function(name, id_owner, id_type){

    console.log("name: ", name, " id_owner:", id_owner, " id_type:",  id_type)

    const conexion = await getConnection()
    const result = await conexion
    .request()                         
         .input("name", sql.VarChar, name  )        
         .input("id_owner", sql.Int, id_owner )        
         .input("id_type", sql.Int, id_type )        
         .execute('sp_insert_sensor')
    //console.log(result)
    return "{\"Resultado\": \"Insercion Correcta\"}"
}


const sp_update_sensor = async function(id_sensor, name){    

    console.log("Id_sensor: ", id_sensor, " name:", name)
    
    const conexion = await getConnection()
    const result = await conexion
    .request()        
        .input("id_sensor", sql.Int, id_sensor )        
        .input("name", sql.VarChar, name )        
        .execute("SP_Update_SensorInfo")
   //console.log(result)
   return "{\"Resultado\": \"Actualizacion Correcta\"}"
}
//updateUsuario()


const sp_delete_sensor = async function(id_sensor){    
    const conexion = await getConnection()
    const result = await conexion
    .request()            
        .input("id_sensor", id_sensor )        
        .execute("sp_delete_sensor")
    //console.log(result)
   return "{\"Resultado\": \"Eliminacion Correcta\"}"
}
//deleteUsuario()




///////////////////////////////////////////////////////////////////////////////////////////////////
//EXPORTA LAS FUNCIONES PARA HACER POSIBLE SU POSTERIOR IMPORTANCION Y USO EN OTROS MODULOS
module.exports = {
    sp_selectAll_sensorInfo, //get all ..
    sp_selectall_records, //get recors
    sp_select_sensor,  // get sensor

    sp_insert_sensor_record, //insert record
    sp_insert_new_sensor,  //insert new sensor

    sp_update_sensor, // update

    sp_delete_sensor // delete
}
