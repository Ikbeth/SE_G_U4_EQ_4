const registroService = require("../services/registrosService");

//req contiene el valor de los parametros que se obtienen del json
//res es la respuesta que sera retornada de la peticion http
const getRegistros_del_Sensor = (req, res) => {
    const {
      params : { idSensor }, // Corresponde al nombre del atributo especificado en la ruta ...  /:idSensor/registros
    } = req;
    
    //ECHO para visualizar el valor que fue recibido desde la ruta...
    console.log(`id Sensor: R${idSensor}R`)

    //Si no existe o esta vacia la cadena del sensor
    //Ejemplo: http://localhost:3000/api/v1/sensors/  /registros
    if (!idSensor || idSensor.trim()=='') {
      res.status(400).send({
        status: "FAILED",
        data: { error: `Parameter 'idSensor' can not be empty` },
      });
      return;
    }
  
    try {
      //Intenta recupearar a todos los registros asociados al sensor
      const record = registroService.getRegistros_del_Sensor(idSensor);

      //Si no se genero algun error devuelve el codigo http y un objeto con el estado y un vector con los datos devueltos
      res.status(200).send({
         status: "OK", data: record 
        });
    } catch (error) {

      //En caso de error devuelve el codigo de error si existe, sino, devuelve 500, y un objeto json con la informacion del error
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };
  
  //EXPORTA LA FUNCION PARA HACER POSIBLE SU POSTERIOR IMPORTANCION Y USO EN OTROS MODULOS
  module.exports = { getRegistros_del_Sensor };