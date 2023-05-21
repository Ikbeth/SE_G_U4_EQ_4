//Intermediario entre el modelo y el controlador

//Importa al modelo
const Record = require("../models/Registros")

//Equivale a SELECT  * FROM ...
const getRegistros_del_Sensor = function(idSensor){
    try{
        //Ademas del try catch no se hacen validaciones adicionales, debido a que estas fueron realizadas previamente en el modelo

        //Recupera un objeto json que contiene la informacion de todos los registros asociados al idSensor recibido como argumento
        const r = Record.getRegistros_del_Sensor(idSensor)  

        return r

    }catch(error){
        throw error
    }
}

//EXPORTA LA FUNCION PARA HACER POSIBLE SU POSTERIOR IMPORTANCION Y USO EN OTROS MODULOS
module.exports= {
    getRegistros_del_Sensor
}