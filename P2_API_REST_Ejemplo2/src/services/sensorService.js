//Intermediario entre el modelo y el controlador

const SensorHandler = require('../models/Sensor')

//////////////////////////////////////////////////////////////////////////////////////////////////////
//Equivale a SELECT  * FROM ...
const getAllSensors = ()  => {
    //Ademas del try catch no se hacen validaciones adicionales, debido a que estas fueron realizadas previamente en el modelo
    try{
        const allSensors = SensorHandler.getAllSensors()    
        return allSensors
    } catch (error) {
    throw error;
    }
}        

//////////////////////////////////////////////////////////////////////////////////////////////////////
//Equivale a SELECT  * FROM ... WHERE id_sensor = idSensor
const getSensor = (idSensor)  => {
    //Ademas del try catch no se hacen validaciones adicionales, debido a que estas fueron realizadas previamente en el modelo
    try{
        const sensor = SensorHandler.getSensor(idSensor)
        return sensor
    } catch (error) {
        throw error;
      }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//Equivale a INSERT INTO ...
const createSensor = (datos_sensor)  => {
    const sensor = {  
        ...datos_sensor,//res parameter //COPIA EXACTAMENTE IGUAL AL OBJETO QUE SE RECIBIO COMO PARAMETRO        
        //createdAt: new Date().toLocaleString("es-MX", { timeZone: "UTC" }), //AGREGA UN PARAMETRO PARA LA FECHA DE CREACION
        //updatedAt: new Date().toLocaleString("es-MX", { timeZone: "UTC" })  //AGREGA UN PARAMETRO PARA LA FECHA DE ACTUALIZACION
        createdAt: new Date().toLocaleString("es-MX"), //AGREGA UN PARAMETRO PARA LA FECHA DE CREACION
        updatedAt: new Date().toLocaleString("es-MX")  //AGREGA UN PARAMETRO PARA LA FECHA DE ACTUALIZACION
      }

    //console.log("Sensor a Crear: ",sensor) //debug
    
    //Ademas del try catch no se hacen validaciones adicionales, debido a que estas fueron realizadas previamente en el modelo
    try {
        const createdSensor = SensorHandler.createSensor(sensor);
        return createdSensor;
    } catch (error) {
        throw error;
      }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//Equivale a UPDATE ...
const updateSensor = (idSensor, bodySensor)  => {
    try{
        const sensor = SensorHandler.updateSensor(idSensor, bodySensor)
        return sensor
    } catch (error) {
        throw error;
      }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//Equivale a DELETE
const deleteSensor = (idSensor)  => {
    try{
        SensorHandler.deleteSensor(idSensor)
    } catch (error) {
        throw error;
      }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//EXPORTA LAS FUNCIONES PARA HACER POSIBLE SU POSTERIOR IMPORTANCION Y USO EN OTROS MODULOS
module.exports={
    getAllSensors,        
    getSensor,
    createSensor,
    updateSensor,
    deleteSensor
}