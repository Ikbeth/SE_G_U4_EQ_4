//importa al archivo json que contiene la simulacion de la base de datos
const database = require("./database.json")

const getRegistros_del_Sensor = function(idSensor){
    try{
        //Aplica un filtro a los datos del json para solo obtener aquellos registros asociados al idSensor que se requiere
        //Esta parte es la que es sustituida por la consulta a la base de datos!
        const r = database.registros.filter(
            (registro) => registro.id_sensor === idSensor 
        )

        ////////////////////////////////////////////////////////////////////////////////
        //This...
        //EJEMPLO 1
        //throw new Error('Throw makes it go boom!')  //Generara el STATUS 500
        //Wraps the error passed to it in the following format:
        //{ name: 'Error', message: 'String you pass in the constructor' }

        //throw object ... uses custom wrap... like: 

        /*
        //EJEMPLO 2
        throw{
            status:200,  //Generara el STATUS 200
            data:`Ha Ocurrido un error...`
        }
        */
        /////////////////////////////////////////////////////////////////////////////

        //console.log(`Total de elementos filtrados: ${r.length}`)
        if(r==0){ // Si no existen registros devueltos... 
            throw{ //Genera una excepcion con el codigo de estado 400
                status: 400,            
                data:`No se puede encontrar el registro con el ID: ${idSensor}`             
            }
        }

        return r
    }catch(error){

        console.log(`STATUS del Error Generado: ${error?.status || 500}`)
        console.log(`Error: ${error}`)

        throw{
            //error?.status => Encadenamiento opcional - Devuelve undefined cuando la propiedad no existe en el objeto que se esta leyendo
            status:error?.status || 500, //|| 500 => Fusionn alcista (Valor predeterminado cuando el encademaniento opcional da undefined)
            message:error?.message || error //Devuelve message si existe, sino, devuelve al objeto json que se envio en el throw
        }
    }
}

 //EXPORTA LA FUNCION PARA HACER POSIBLE SU POSTERIOR IMPORTANCION Y USO EN OTROS MODULOS
module.exports = {
    getRegistros_del_Sensor
}