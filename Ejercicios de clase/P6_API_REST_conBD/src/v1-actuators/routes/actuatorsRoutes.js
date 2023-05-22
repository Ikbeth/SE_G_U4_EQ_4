const express = require('express')

const actuatorController = require('../../controllers/actuatorController')

//RUTAS
const router = express.Router()

// /api/v1-actuators/actuators
router
   // http://localhost:3000/api/v1-actuators/actuators/
  .get("/", actuatorController.getAll_Actuators) //EQUIVALE EN SQL-CRUD: SELECT * FROM ... 
  
  .get("/registros", actuatorController.getAll_Records)//el orden es importante... si este get se pone despues del anterior no funcionara, debido a que 
  //               se tomaria a la palabra "registros" como parte del parametro (:idActuator) que se envia a la peticion http

  // http://localhost:3000/api/v1-actuators/actuators/2
  .get("/:idActuator", actuatorController.getActuatorById) //EQUIVALE EN SQL-CRUD: SELECT * FROM ... WHERE id_sensor = ID  
  
  //Alternativa funcional... cuando se requiere obtener los registros de un sensor en particular...
  // http://localhost:3000/api/v1-actuators/actuators/2/registros
  //.get("/:idActuator/registros", actuatorController.getAll_Records) //EQUIVALE EN SQL-CRUD: SELECT * FROM ... INNER JOIN ... WHERE id_sensor = ID    
  
  //INSERT VALORES A UN ACTUADOR QUE YA EXISTE ....
  // http://localhost:3000/api/v1-actuators/actuators/
  .post("/", actuatorController.insertActuatorRecord) //EQUIVALE EN SQL-CRUD: INSERT
  
  //INSERT UN ACTUADOR NUEVO
  // http://localhost:3000/api/v1-actuators/actuators/
  .post("/new", actuatorController.insertNewActuator) //EQUIVALE EN SQL-CRUD: INSERT

  // http://localhost:3000/api/v1-actuators/actuators/2
  .patch("/:idActuator", actuatorController.updateActuator) //EQUIVALE EN SQL-CRUD: UPDATE
  
  // http://localhost:3000/api/v1-actuators/actuators/2
  .delete("/:idActuator", actuatorController.deleteActuator);


  //EXPORTA EL ROUTER PARA HACER POSIBLE SU POSTERIOR IMPORTANCION Y USO EN OTROS MODULOS
module.exports = router;