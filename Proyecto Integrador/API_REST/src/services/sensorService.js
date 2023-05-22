//Intermediario entre el modelo y el controlador

const {getConnection} = require('../models/conexion.js')
const sql = require('mssql')

//Insertar 
const insertSensorRecord = async function(JsonObj){
    id = JsonObj.id_sensor
    current_value  = JsonObj.valores
    const conexion = await getConnection()
    const result = await conexion
    .request()  
    .input("id_sensor", sql.Int, id)      
    .input("current_value", sql.Int, current_value)        
    .execute('Insert_Sensor_Record')
    console.log(result)
}

const SelectSensorRecord = async function(){
    const conexion = await getConnection()
    const result = await conexion
    .request()
    .execute('Select_ALL_Sensor_records')
    console.log(result.recordset)
    return result.recordset
}

//EXPORTA LAS FUNCIONES PARA HACER POSIBLE SU POSTERIOR IMPORTANCION Y USO EN OTROS MODULOS
module.exports={
    insertSensorRecord,
    SelectSensorRecord
}