const express = require('express')

//CONTROLADORES
const sensorController = require("../../controllers/sensorController");

//RUTAS
const router = express.Router()

router
  .post("/new/:idSensor", sensorController.addSensorRecord)

  .get("/records/", sensorController.SelectSensorRecord)
  //EXPORTA EL ROUTER PARA HACER POSIBLE SU POSTERIOR IMPORTANCION Y USO EN OTROS MODULOS
module.exports = router;