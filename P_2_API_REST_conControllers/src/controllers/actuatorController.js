

//SELECT*FROM .. ALL
const getAll_Actuators = function(req,res){
    console.log('GET ALL')
    res
    .status(201)
    .send({info:"todo correcto", data:"datos recuerados..."}) // cualquier nombre pero DEBE ser JSON
}

//SELECT*FROM .. WHERE ..ID
const getActuatorByID = function(req,res){
    const {params:{idActuator}} = req
    console.log(`GET ACTUATOR ID: ${idActuator}`)
    res
    .status(200)
    .send({info:"OK", data:`datos recuperados del ID ${idActuator}`})
}

//SELECT*FROM .. INER JOIN WHERE ..ID
const getRecordsOfActuator = function(req,res){
    console.log('GET CON JOIN')
}

//INSERT
const InsertActuator = function(req,res){

    console.log('INSERT')
}

//UPDATE
const UppdateActuators = function(req,res){
    const {params:{idActuator}, body} = req
    console.log(`UPDATE ID: ${idActuator}`)
    res
    .status(200)
    .send({info:"OK", data:`datos recuperados del ID ${idActuator}`, description:body})
}

//DELETE
const DeleteActuators = function(req,res){
    console.log('DELETE')
}

module.exports = {
    getAll_Actuators,
    getActuatorByID,
    getRecordsOfActuator,
    InsertActuator,
    UppdateActuators,
    DeleteActuators
}