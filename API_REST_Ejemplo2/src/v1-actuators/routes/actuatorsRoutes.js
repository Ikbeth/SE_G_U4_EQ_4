const express = require('express')


//const sensorController = require("../../controllers/sensorController");
//const registroController = require("../../controllers/registrosControler");

const router = express.Router()

router
  .get("/",(req,res)=>{
    console.log('GET ALL')
    res
    .status(201)
    .send({info:"todo correcto", data:"datos recuerados..."}) // culquir nombre pero DEBE ser JSON
  })
  .get("/:idActuator",(req,res)=>{
    const {params:{idActuator}} = req
    console.log(`GET ACTUATOR ID: ${idActuator}`)
    res
    .status(200)
    .send({info:"OK", data:`datos recuperados del ID ${idActuator}`})
  })
  .get("/:idActuator/registros",(req,res)=>{console.log('GET CON JOIN')})
  .post("/",(req,res)=>{
    console.log('INSERT')
  })
  .patch("/:idActuator",(req,res)=>{
    const {params:{idActuator}, body} = req
    console.log(`UPDATE ID: ${idActuator}`)
    res
    .status(200)
    .send({info:"OK", data:`datos recuperados del ID ${idActuator}`, description:body})

  })
  .delete("/:idActuator",(req,res)=>{console.log('DELETE')});
module.exports=router;