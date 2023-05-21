const express = require('express')

const actuatorController = require('../../controllers/actuatorController')

//RUTAS
const router = express.Router()

// /api/v1-actuators/actuators
router
   // http://localhost:3000/api/v1-actuators/actuators/
  .get("/", actuatorController.getAll_Actuators) //EQUIVALE EN SQL-CRUD: SELECT * FROM ... 
  
  // http://localhost:3000/api/v1-actuators/actuators/2
  .get("/:idActuator", actuatorController.getActuatorById) //EQUIVALE EN SQL-CRUD: SELECT * FROM ... WHERE id_sensor = ID  
  
  // http://localhost:3000/api/v1-actuators/actuators/2/registros
  .get("/:idActuator/registros", actuatorController.getRecordsOfActuator) //EQUIVALE EN SQL-CRUD: SELECT * FROM ... INNER JOIN ... WHERE id_sensor = ID  
  
  // http://localhost:3000/api/v1-actuators/actuators/
  .post("/", actuatorController.insertActuator) //EQUIVALE EN SQL-CRUD: INSERT
  
  // http://localhost:3000/api/v1-actuators/actuators/2
  .patch("/:idActuator", actuatorController.updateActuator) //EQUIVALE EN SQL-CRUD: UPDATE
  
  // http://localhost:3000/api/v1-actuators/actuators/2
  .delete("/:idActuators", actuatorController.deleteActuator);


  //EXPORTA EL ROUTER PARA HACER POSIBLE SU POSTERIOR IMPORTANCION Y USO EN OTROS MODULOS
module.exports = router;