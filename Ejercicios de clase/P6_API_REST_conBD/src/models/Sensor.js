//importa al archivo json que contiene la simulacion de la base de datos
const database = require('./database.json')

//modulo para modificar al archivo json utilizado como base de datos
const { guardaBaseDeDatos } = require("./utils")

///////////////////////////////////////////////////////////////////////////////////////////////////
const getAllSensors = function () {
    return database.sensores
}

///////////////////////////////////////////////////////////////////////////////////////////////////
const getSensor = function (idSensor) {
    const sensor = database.sensores.find((sensor) => sensor.id_sensor === idSensor)

    console.log(`Resultado de la busqueda: ${sensor}`)

    if (!sensor) {
        throw { //Genera una excepcion con el codigo de estado 400
            status: 400,
            data: `No se puede encontrar el sensor con el ID: ${idSensor}`
        }
    }

    //Si no se genera error se devuelven los datos del sensor
    return sensor
}

///////////////////////////////////////////////////////////////////////////////////////////////////
const createSensor = function (newSensor) {

    try {

        //Busca si existe un sensor con el id del nuevo sensor
        const index = database.sensores.findIndex(
            (sensor) => sensor.id_sensor === newSensor.id_sensor)

        //console.log("index", index)

        if (index > -1) {
            //si existe un indice para el sensor, hace throw para no guardar duplicados        
            throw {
                status: 400,
                message: `El sensor con ID ${newSensor.id_sensor} ya existe`
            }
        }

        //Si continua aqui, entonces agrega el nuevo sensor a la base de datos y guarda los cambios        
        database.sensores.push(newSensor)
        guardaBaseDeDatos(database)
        return newSensor //regresa al objeto que se guardo como un echo de confirmacion del procedimiento
    }
    catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        }
    }

}

///////////////////////////////////////////////////////////////////////////////////////////////////
const updateSensor = function (idSensor, bodySensor) {

    try {

        //Busca si existe un sensor con el id del nuevo sensor
        const index = database.sensores.findIndex(
            (sensor) => sensor.id_sensor === idSensor
        )

        if (index === -1) {
            //si no existe un indice para el sensor, hace throw pues no se puede actualizar el registro
            throw {
                status: 400,
                message: `El sensor con ID ${idSensor} no existe`
            }
        }

        //El orden de este procedimiento es importante... debido a que primero coloca los valores originales del sensor
        //y posteriormente, sobreescribe a todos aquellos para los que se envio un valor diferente en el body
        //Es importante considerar que como se usa json, en este ejemplo, si se envian campos adicionales, estos se agregaran al sensor actualizado
        const new_sensor = {
            ...database.sensores[index], //Datos Actuales
            ...bodySensor,   //Nuevos Datos
            updatedAt: new Date().toLocaleString("es-MX") //La Fecha se actualiza aparte, derivado de que esta se calcula al actualizar
        }
        
        database.sensores[index] = new_sensor //Cambia el objeto en el JSON
        guardaBaseDeDatos(database) //Guarda los datos cambiados en la base de datos

        return new_sensor //Devuelve el objeto que se actualizo a modo de ECHO de la actualizacion

    }
    catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
const deleteSensor = function (idSensor) {

    //console.log("id", idSensor)

    const index = database.sensores.findIndex(
        (sensor) => sensor.id_sensor === idSensor
    )

    //console.log("val : ", index)

    if (index === -1) {
        //si no existe un indice para el sensor, hace throw pues no se puede eliminar el registro
        throw {
            status: 400,
            message: `El sensor con ID ${idSensor} no existe`
        }
    }

    database.sensores.splice(index, 1) //Elimina el objeto en el JSON
    guardaBaseDeDatos(database) //Guarda los datos cambiados en la base de datos
}

///////////////////////////////////////////////////////////////////////////////////////////////////
//EXPORTA LAS FUNCIONES PARA HACER POSIBLE SU POSTERIOR IMPORTANCION Y USO EN OTROS MODULOS
module.exports = {
    getAllSensors,
    getSensor,
    createSensor,
    updateSensor,
    deleteSensor
}