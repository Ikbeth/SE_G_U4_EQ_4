const express = require('express')

const sensorController = require("../../controllers/sensorController");
const registroController = require("../../controllers/registrosControler");

const router = express.Router()

router
  .get("/", sensorController.getAllSensors)
  .get("/:idSensor", sensorController.getSensor)
  .get