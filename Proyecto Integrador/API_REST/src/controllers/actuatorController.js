
const actuatorService = require('../services/actuatorService')

const addActuatorRecord = function (req, res) {
    const { body } = req

    if (
        !body.id_actuator ||
        !body.valores  //Minimo y Maximo        
    ) {        
        res.status(400)
           .send({
            status:"Error", data:{
                error:"Faltan datos"}
            })
    }
    // *** OBJETO QUE CONTIENE LA INFORMACION DEL NUEVO SENSOR ***
    const newActuatorRecord = {
        Id_actuator: body.id_actuator,
        Current_value: body.valores
    };

    //console.log('actuator: ', newActuator) //debug

    try{
        // *** INTENTA AGREGAR AL SENSOR ***
        const actuatorRecord = actuatorService.insertActuatorRecord(newActuatorRecord) //SENSOR CONTIENE LOS DATOS DEL SENSOR QUE FUE AGREGADO A LA BASE DE DATOS A MODO DE ECHO
        res.status(201).send({ status: "OK", data: actuator });
    
        }catch(error){
    
            res.status(error?.status || 500).send(
                {
                    status:"Error", data:{
                        error:error?.message || error
                    }
                }
            )
            
        }

}

const SelectActuatorRecord = function (req, res) {
    const { body } = req

    if (
        !body.id_actuator       
    ) {        
        res.status(400)
           .send({
            status:"Error", data:{
                error:"Faltan datos"}
            })
    }
    // *** OBJETO QUE CONTIENE LA INFORMACION DEL NUEVO SENSOR ***
    const newActuatorRecord = {
        Id_actuator: body.id_actuator,
    };

    //console.log('actuator: ', newActuator) //debug

    try{
        // *** INTENTA AGREGAR AL SENSOR ***
        const actuatorRecord = actuatorService.SelectActuatorRecord(newActuatorRecord) //SENSOR CONTIENE LOS DATOS DEL SENSOR QUE FUE AGREGADO A LA BASE DE DATOS A MODO DE ECHO
        res.status(201).send({ status: "OK", data: actuator });
    
        }catch(error){
    
            res.status(error?.status || 500).send(
                {
                    status:"Error", data:{
                        error:error?.message || error
                    }
                }
            )
            
        }

}


module.exports = {
    addActuatorRecord,
    SelectActuatorRecord
}

