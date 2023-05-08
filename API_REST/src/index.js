const express = require('express')

const v1Actuators = require('./v1-actuators/routes/actuatorsRoutes')

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json())

app.use("/api/v1-actuators/actuators",v1Actuators)

app.use("/",(req,res)=>{
    res.send(`<h1>API RESTful en NodeJS para Servicios Embebidos</h1>`)
})

app.listen(PORT, function(){
    console.log(`Servidor escuchando en el Puerto: ${PORT}`);
})
