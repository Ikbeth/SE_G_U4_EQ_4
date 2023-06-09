const {getConnection} = require('../models/conexion.js')
const sql = require('mssql')   

//Insertar 
const insertActuatorRecord = async function(JsonObj){
    id = JsonObj.id_actuator
    current_value  = JsonObj.valores
    const conexion = await getConnection()
    const result = await conexion
    .request()    
    .input("id_actuator", sql.Int, id)      
    .input("current_value", sql.Int, current_value)        
    .execute('Insert_Actuator_Record')
    console.log(result)
}

const SelectActuatorRecord = async function(){
    const conexion = await getConnection()
    const result = await conexion
    .request()    
    .execute('Select_ALL_Actuator_records')
    console.log(result.recordset)
    return result.recordset
}

module.exports = {
    insertActuatorRecord,
    SelectActuatorRecord
}

