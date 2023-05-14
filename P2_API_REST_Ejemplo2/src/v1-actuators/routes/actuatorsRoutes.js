const express = require('express')

//RUTAS
const router = express.Router()

// /api/v1-actuators/actuators
router
  .get("/", 
    (req, res)=> {
        console.log('GET ALL')
        res.status(201)
        .send({info:"todo correcto", data:"datos recuperados..."})
    }) //EQUIVALE EN SQL-CRUD: SELECT * FROM ... 
  .get("/:idActuator", (req, res)=> {

    const {params:{idActuator}} = req 
    console.log(`GET ACTUATOR ID:  ${idActuator}`)

    res.status(200)
    .send({info:"OK", data:`datos recuperados del ID ${idActuator}`})

  }) //EQUIVALE EN SQL-CRUD: SELECT * FROM ... WHERE id_sensor = ID  
  .get("/:idActuator/registros", (req, res)=> {
    console.log('GET CON JOIN')
  }) //EQUIVALE EN SQL-CRUD: SELECT * FROM ... INNER JOIN ... WHERE id_sensor = ID  
  .post("/", (req, res)=> {console.log('INSERT')}) //EQUIVALE EN SQL-CRUD: INSERT
  .patch("/:idActuator", (req, res)=> {
  
    const {params:{idActuator}, body} = req 
    console.log(`UPDATE DEL ID:  ${idActuator}`)

    res.status(200)
    .send({info:"OK", data:`datos actualizados del ID ${idActuator}`,
      description:body
  })

  
  }) //EQUIVALE EN SQL-CRUD: UPDATE
  .delete("/:idActuators", (req, res)=> {console.log('DELETE')});


  //EXPORTA EL ROUTER PARA HACER POSIBLE SU POSTERIOR IMPORTANCION Y USO EN OTROS MODULOS
module.exports = router;