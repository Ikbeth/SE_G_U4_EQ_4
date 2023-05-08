const express = require('express')
const v1Actuators = require('./v1-actuators/routes/actuatorsRoutes')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())

// http://localhost:3000    127.0.0.1
// http:// ip local / publica / homologada / privada
// https:// DNS

app.use("/api/v1-actuators/actuators",v1Actuators)

app.get("/",(req,res)=>{
    res.send(`<h1>API RESTful en NodeJS para Servicios Embebidos</h1>`)
})

app.listen(PORT, function(){
    console.log(`Servidor escuchando en el Puerto: ${PORT}`);
})
