const sensorService = require("../services/sensorService");

const addSensorRecord = function (req, res) {
    const { body } = req
    console.log(body)

    if (
        !body.id_sensor ||
        !body.valores  //Minimo y Maximo        
    ) {        
        res.status(400)
           .send({
            status:"Error", data:{
                error:"Faltan datos"}
            })
    }
    // *** OBJETO QUE CONTIENE LA INFORMACION DEL NUEVO SENSOR ***
    const newSensorRecord = {
        id_sensor: body.id_sensor,
        valores: body.valores
    };

    console.log('sensor: ', newSensorRecord) //debug

    try{
        // *** INTENTA AGREGAR AL SENSOR ***
        const sensorRecord = sensorService.insertSensorRecord(newSensorRecord) //SENSOR CONTIENE LOS DATOS DEL SENSOR QUE FUE AGREGADO A LA BASE DE DATOS A MODO DE ECHO
        res.status(201).send({ status: "OK", data: sensorRecord });
    
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

const SelectSensorRecord = function (req, res) {
    const { body } = req

    if (
        !body.id_sensor       
    ) {        
        res.status(400)
           .send({
            status:"Error", data:{
                error:"Faltan datos"}
            })
    }
    // *** OBJETO QUE CONTIENE LA INFORMACION DEL NUEVO SENSOR ***
    const selectSensorRecord = {
        Id_sensor: body.id_sensor,
    };

    console.log('sensor: ', selectSensorRecord) //debug

    try{
        // *** INTENTA AGREGAR AL SENSOR ***
        const sensorRecord = sensorService.SelectSensorRecord(selectSensorRecord) //SENSOR CONTIENE LOS DATOS DEL SENSOR QUE FUE AGREGADO A LA BASE DE DATOS A MODO DE ECHO
        res.status(201).send({ status: "OK", data: sensorRecord });
    
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

//////////////////////////////////////////////////////////////////////////////////////////////////////
//EXPORTA LAS FUNCIONES PARA HACER POSIBLE SU POSTERIOR IMPORTANCION Y USO EN OTROS MODULOS
module.exports = {
    addSensorRecord,
    SelectSensorRecord
}