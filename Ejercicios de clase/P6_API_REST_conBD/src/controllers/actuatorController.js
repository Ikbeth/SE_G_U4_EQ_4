
const services = require('../services/actuatorService')

//SELECT * FROM ... ALL
const getAll_Actuators = async function(req,res){

    const resultado = await services.getAll_Actuators()    
        res.status(201).send(resultado)
}

//SELECT * FROM .. WHERE ... ID
const getActuatorById = async function(req,res){ 
    const {params:{idActuator}} = req 
    console.log(typeof idActuator)
    if (!isNaN(idActuator)){
        const resultado = await services.get_ActuatorById(idActuator)
        res.status(200).send(resultado)
    }
    else{
        res.status(501).send("Error")
    }
}

//SELECT * FROM .. INNER JOIN WHERE ... ID
const getAll_Records = async function(req,res){
    //console.log("hola")
    const resultado = await services.getAll_Records()
    res.status(200).send(resultado)
}

//INSERT RECORD
//Ejemplo de body ->
/*
{
    "Id_sensor": 1,
    "Current_value":155
}
*/
const insertActuatorRecord = async function(req,res){
    const { body } = req; //objeto a ser creado

    // COMPRUEBA QUE TODOS LOS CAMPOS TENGA VALORES
    if (
        !body.Id_sensor ||
        !body.Current_value        
    ) {        
        res.status(400)
           .send({
            status:"Error", data:{
                error:"Faltan datos"}
            })
        return 
    }
    // *** OBJETO QUE CONTIENE LA INFORMACION DEL NUEVO SENSOR ***
    const newSensor = {
        Id_sensor: body.Id_sensor,
        Current_value: body.Current_value,        
    };

    const resultado = await services.insertActuatorRecord(newSensor)
    
    res
    .setHeader('content-type', "application/json") //'text/plain')
    .status(201)
    .send(resultado)

}

//INSERT NEW 
//Ejemplo de body ->
/*
{
    "Name": "Prueba",
    "Id_owner":1,
    "Id_type":1
}
*/

const insertNewActuator = async function(req,res){
    
    const { body } = req; //objeto a ser creado

    // COMPRUEBA QUE TODOS LOS CAMPOS TENGA VALORES
    if (
        !body.Name ||
        !body.Id_owner ||
        !body.Id_type        
    ) {        
        res.status(400)
           .send({
            status:"Error", data:{
                error:"Faltan datos"}
            })
        return 
    }
    // *** OBJETO QUE CONTIENE LA INFORMACION DEL NUEVO SENSOR ***
    const newSensor = {
        Name: body.Name,
        Id_owner: body.Id_owner,   
        Id_type: body.Id_type     
    };

    const resultado = await services.insertActuatorNew(newSensor)
    
    res
    .setHeader('content-type', "application/json") //'text/plain')
    .status(201)
    .send(resultado)


}

//UPDATE
//Ejemplo de body ->
/*
{
    "Name": "Nuevo Nombre - Prueba" 
}
*/
const updateActuator = async function(req,res){
    const {params:{idActuator}, body} = req 
        
    // COMPRUEBA QUE TODOS LOS CAMPOS TENGA VALORES
    if (        
        !body.Name         
    ) {        
        res.status(400)
           .send({
            status:"Error", data:{
                error:"Faltan datos"}
            })
        return 
    }
    // *** OBJETO QUE CONTIENE LA INFORMACION DEL NUEVO SENSOR ***
    const updateSensor = {
        Id_sensor: idActuator,   
        Name: body.Name        
    };

    const resultado = await services.updateActuator(updateSensor)
    
    res
    .setHeader('content-type', "application/json") //'text/plain')
    .status(201)
    .send(resultado)
}

//DELETE
const deleteActuator = async function(req,res){
    const {params:{idActuator}} = req 
    console.log(typeof idActuator)
    if (!isNaN(idActuator)){
        const resultado = await services.deleteActuator(idActuator)        
        res
        .setHeader('content-type', "application/json") //'text/plain')
        .status(200)
        .send(resultado)
    }
    else{
        res.status(501).send("Error")
    }
}


module.exports = {
    getAll_Actuators,
    getActuatorById,
    getAll_Records,

    insertActuatorRecord,
    insertNewActuator,
    
    updateActuator,
    deleteActuator
}

