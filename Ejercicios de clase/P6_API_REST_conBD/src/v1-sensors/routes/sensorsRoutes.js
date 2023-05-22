const express = require('express')

//CONTROLADORES
const sensorController = require("../../controllers/sensorController");
const registroController = require("../../controllers/registrosController");

//RUTAS
const router = express.Router()

router
  .get("/", sensorController.getAllSensors) //EQUIVALE EN SQL-CRUD: SELECT * FROM ... 
  //PETICION:  http://localhost:3000/api/v1/sensors
  //SALIDA: RETORNA UN OBJETO JSON COMPUESTO DE UNA VARIABLE DE ESTADO UN ARREGLO DE OBJETOS
  //        CON LA INFORMACION BASICA DE LOS SENSORES 

  .get("/:idSensor", sensorController.getSensor) //EQUIVALE EN SQL-CRUD: SELECT * FROM ... WHERE id_sensor = ID
  //PETICION:  http://localhost:3000/api/v1/sensors/ID
  //SALIDA: RETORNA UN OBJETO JSON COMPUESTO DE UNA VARIABLE DE ESTADO Y UN OBJETO CON LOS DATOS DEL SENSOR

  .get("/:idSensor/registros", registroController.getRegistros_del_Sensor) //EQUIVALE EN SQL-CRUD: SELECT * FROM ... INNER JOIN ... WHERE id_sensor = ID
  //PETICION:  http://localhost:3000//api/v1/sensors/ID/registros
  //SALIDA: RETORNA UN OBJETO JSON COMPUESTO POR EL ESTADO Y UN VECTOR DE LOS REGISTROS DEL SENSOR

  .post("/", sensorController.createSensor) //EQUIVALE EN SQL-CRUD: INSERT
  //PETICION:  http://localhost:3000//api/v1/sensors
  //BODY en RAW JSON
/*
  {
    "id_sensor": "10",
    "nombre": "Sensor Ultrasonico",
    "tipo": "Digital",
    "valores": [
                0,
                255
            ]
  }  
*/
  //SALIDA: RETORNA EL OBJETO JSON QUE REPRESENTA AL SENSOR QUE FUE CREADO

  .patch("/:idSensor", sensorController.updateSensor) //EQUIVALE EN SQL-CRUD: UPDATE
  //PETICION:  http://localhost:3000//api/v1/sensors/ID
  //BODY en RAW JSON
/*
  {    
    "nombre": "nSensor Ultrasonico",
    "tipo": "nDigital",
    "valores": [
                255,
                0
            ]
  }  
*/
  //SALIDA: RETORNA EL OBJETO JSON QUE REPRESENTA AL SENSOR QUE FUE ACTUALIZADO...ACTUALIZA INTERNAMENTE AL PARAMETRO FECHA

  //OPCION QUE SE PUEDE SEGUIR PARA CUBRIR TODAS LAS POSIBILIDADES, EN ESTE CASO UNA ALTERNATIVA POSIBLE DE PATCH...
  //NORMALMENTE NO SE REQUIERE....
  .patch("/", (req, res)=>{
    res.status(400).send({
      status: "FAILED",
      data: { error: `Patch requiere que se envie un ID` },
    });
  })

  .delete("/:idSensor", sensorController.deleteSensor);
  //PETICION:  http://localhost:3000//api/v1/sensors/ID
  //SALIDA: CONFIRMA LA ELIMINACION DEL SENSOR
  

  //EXPORTA EL ROUTER PARA HACER POSIBLE SU POSTERIOR IMPORTANCION Y USO EN OTROS MODULOS
module.exports = router;