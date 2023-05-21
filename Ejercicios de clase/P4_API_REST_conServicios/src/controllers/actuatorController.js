
const services = require('../services/actuatorService')

//SELECT * FROM ... ALL
const getAll_Actuators = function(req,res){

    const resultado = services.getAll_Actuators()

    console.log('GET ALL: ', resultado)
        res.status(201)
        .send({info:"todo correcto", data:`datos recuperados...${resultado}`})
}

//SELECT * FROM .. WHERE ... ID
const getActuatorById = function(req,res){
 
    const {params:{idActuator}} = req 
    console.log(`GET ACTUATOR ID:  ${idActuator}`)

    res.status(200)
    .send({info:"OK", data:`datos recuperados del ID ${idActuator}`})

}

//SELECT * FROM .. INNER JOIN WHERE ... ID
const getRecordsOfActuator = function(req,res){
    console.log('GET CON JOIN')
}

//INSERT
const insertActuator = function(req,res){
    console.log('INSERT')
}

//UPDATE
const updateActuator = function(req,res){
    const {params:{idActuator}, body} = req 
    console.log(`UPDATE DEL ID:  ${idActuator}`)

    res.status(200)
    .send({info:"OK", data:`datos actualizados del ID ${idActuator}`,
      description:body
  })
}

//DELETE
const deleteActuator = function(req,res){
    console.log('DELETE')
}


module.exports = {
    getAll_Actuators,
    getActuatorById,
    getRecordsOfActuator,
    insertActuator,
    updateActuator,
    deleteActuator
}

