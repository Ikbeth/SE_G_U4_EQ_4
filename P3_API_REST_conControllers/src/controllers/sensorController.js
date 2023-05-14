const sensorService = require("../services/sensorService");

//////////////////////////////////////////////////////////////////////////////////////////////////////
//req contiene el valor de los parametros que se obtienen del json (EN ESTE CASO NO CONTIENE VALORES)
//res es la respuesta que sera retornada de la peticion http
const getAllSensors = (req,res)=>{
    const allSensors = sensorService.getAllSensors();
    res.send({status:"ok", data:allSensors})
}
 
//////////////////////////////////////////////////////////////////////////////////////////////////////
//req contiene el valor de los parametros que se obtienen del json
//res es la respuesta que sera retornada de la peticion http
const getSensor = function(req,res){
    const {params:{idSensor}}  = req
    
    if(!idSensor || idSensor.trim()==''){        
        res.status(400).send({
            status:"Error", data:{
                error:"Debe enviarse un ID"
            }
        })
    }

    try{
    const sensor = sensorService.getSensor(idSensor)
    res.status(200).send(
        { status: "OK", data: sensor 
        });
    } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//req contiene el valor de los parametros que se obtienen del json
//res es la respuesta que sera retornada de la peticion http
const createSensor = function(req,res){
    
    const { body } = req; //objeto a ser creado

    // COMPRUEBA QUE TODOS LOS CAMPOS TENGA VALORES
    if (
        !body.id_sensor ||
        !body.nombre ||
        !body.tipo ||
        !body.valores  //Minimo y Maximo        
    ) {        
        res.status(400)
           .send({
            status:"Error", data:{
                error:"Faltan datos"}
            })
    }
    // *** OBJETO QUE CONTIENE LA INFORMACION DEL NUEVO SENSOR ***
    const newSensor = {
        id_sensor: body.id_sensor,
        nombre: body.nombre,
        tipo: body.tipo,
        valores: body.valores
    };

    //console.log('sensor: ', newSensor) //debug

    try{
    // *** INTENTA AGREGAR AL SENSOR ***
    const sensor = sensorService.createSensor(newSensor) //SENSOR CONTIENE LOS DATOS DEL SENSOR QUE FUE AGREGADO A LA BASE DE DATOS A MODO DE ECHO
    res.status(201).send({ status: "OK", data: sensor });

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
//req contiene el valor de los parametros que se obtienen del json
//res es la respuesta que sera retornada de la peticion http
const updateSensor = function(req, res){
    
    try{
    
        const {
            body, 
            params:{idSensor}
        } = req

        console.log(`G${idSensor}G`)

        if(!idSensor || idSensor.trim()==''){    
            throw{ //Genera una excepcion con el codigo de estado 400
                status: 400,            
                error:`Debe enviarse un ID`             
            }            
        }
        
        //console.log('sensor: ', newSensor) //debug

       const sensor = sensorService.updateSensor(idSensor,body)
       res.send({status:"ok", data:sensor})

    } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//req contiene el valor de los parametros que se obtienen del json
//res es la respuesta que sera retornada de la peticion http
const deleteSensor = function(req,res){
    const{ params:{idSensor}} = req

    if(!idSensor || idSensor.trim()==''){ 
        //return
        res.status(400).send({
            status:"Error", data:{
                error:"Debe enviarse un ID"
            }
        })
    }
    
    try{
        
        sensorService.deleteSensor(idSensor) //Intenta eliminar al sensor
        res.status(200).send({status:"ok"})     //confirma la eliminacion del sensor

        //Puede confirmarse de esta forma:
        //res.status(204).send({status:"ok"})     //Sin embargo, esta manera no devuelve contenido (el objeto json)

    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//EXPORTA LAS FUNCIONES PARA HACER POSIBLE SU POSTERIOR IMPORTANCION Y USO EN OTROS MODULOS
module.exports = {
    getAllSensors,        
    getSensor,
    createSensor,
    updateSensor,
    deleteSensor
}