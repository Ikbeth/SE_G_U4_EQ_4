const express = require('express')
const router = express.Router()

const actuatorController = require('../../controllers/actuatorController')

router
  .get("/",actuatorController.getAll_Actuators)
  .get("/:idActuator",actuatorController.getActuatorByID)
  .get("/:idActuator/registros",actuatorController.getActuatorByID)
  .post("/",actuatorController.InsertActuator)
  .patch("/:idActuator",actuatorController.UppdateActuators)
  .delete("/:idActuator",actuatorController.DeleteActuators);
module.exports=router;