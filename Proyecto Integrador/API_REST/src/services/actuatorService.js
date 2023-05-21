const {getConnection} = require('../models/conexion.js')     

//Insertar 
const insertSensorRecord = async function(JsonObj){
    const conexion = await getConnection()
    const result = await conexion
    id = JsonObj.Id_Actuator
    current_value  = JsonObj.Current_value
    .request()        
        //.input("nombre", sql.VarChar, "Nuevo Nombre" )        
         .input("idActuator", sql.Int, id)      
         .input("value", sql.Int, current_value)        
         .execute('Insert_Sensor_Record')
    console.log(result)
}

const SelectSensorRecord = async function(JsonObj){
    const conexion = await getConnection()
    const result = await conexion
    id = JsonObj.Id_sensor
    .request()      
         .input("idActuator", sql.Int, id)        
         .execute('Select_Sensor_Record')
    console.log(result.recordset[0])
}

module.exports = {
    insertSensorRecord,
    SelectSensorRecord
}

