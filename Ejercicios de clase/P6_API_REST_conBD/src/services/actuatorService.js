const bd = require("../models/SensorSP")

//SELECT * FROM ... ALL
const getAll_Actuators = async function(){    
    //return " GARUCO IS REAL!!"
    const resp = await bd.sp_selectAll_sensorInfo()
    //console.log("resp from service->", resp)
    return resp
}

//SELECT * FROM .. WHERE ... ID
const get_ActuatorById = async function(id){
    const resp = await bd.sp_select_sensor(id)
    return resp
}

//SELECT * FROM .. INNER JOIN WHERE
const getAll_Records = async function(){
    const resp = await bd.sp_selectall_records()
    return resp
}

//INSERT
const insertActuatorRecord = async function(JsonObj){
    id = JsonObj.Id_sensor
    current_value  = JsonObj.Current_value
    //console.log("Res: ", JsonObj)
    const resp = await bd.sp_insert_sensor_record(id, current_value)
    return resp
}

//INSERT
const insertActuatorNew = async function(JsonObj){
    Name = JsonObj.Name
    Id_owner  = JsonObj.Id_owner
    Id_type = JsonObj.Id_type
    //console.log("Res: ", JsonObj)
    const resp = await bd.sp_insert_new_sensor(Name, Id_owner, Id_type)
    return resp
}

//UPDATE
const updateActuator = async function(JsonObj){
    Id_sensor = JsonObj.Id_sensor
    Name = JsonObj.Name        
    console.log("Res: ", JsonObj)
    const resp = await bd.sp_update_sensor(Id_sensor, Name)
    return resp
}

//DELETE
const deleteActuator = async function(id){
    const resp = await bd.sp_delete_sensor(id)
    return resp
}

module.exports = {
    getAll_Actuators,
    get_ActuatorById,
    getAll_Records,
    insertActuatorRecord,
    insertActuatorNew,
    updateActuator,
    deleteActuator
}

