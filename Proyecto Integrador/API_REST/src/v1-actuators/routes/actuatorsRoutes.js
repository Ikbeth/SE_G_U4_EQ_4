const express = require('express')

const actuatorController = require('../../controllers/actuatorController')

//RUTAS
const router = express.Router()

// /api/v1-actuators/actuators
router
  .post("/new/:idActuator", actuatorController.addActuatorRecord)

  .get("/records/:idActuator", actuatorController.SelectActuatorRecord)

  //EXPORTA EL ROUTER PARA HACER POSIBLE SU POSTERIOR IMPORTANCION Y USO EN OTROS MODULOS
module.exports = router;