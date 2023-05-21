const {getConnection} = require('../models/conexion.js')
const sql = require('mssql')   

//Insertar 
const insertSensorRecord = async function(JsonObj){
    id = JsonObj.Id_Actuator
    current_value  = JsonObj.Current_value
    const conexion = await getConnection()
    const result = await conexion
    .request()    
    .input("id_actuator", sql.Int, id)      
    .input("current_value", sql.Int, current_value)        
    .execute('Insert_Sensor_Record')
    console.log(result)
}

const SelectSensorRecord = async function(JsonObj){
    id = JsonObj.Id_sensor
    const conexion = await getConnection()
    const result = await conexion
    .request()      
    .input("id_actuator", sql.Int, id)        
    .execute('Select_Sensor_Record')
    console.log(result.recordset[0])
}

module.exports = {
    insertSensorRecord,
    SelectSensorRecord
}

