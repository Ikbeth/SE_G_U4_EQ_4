const express = require('express')
const v1Sensors = require('./v1/routes/sensorRoutes')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use("/app/v1/sensors", v1Sensors)

app.get("/",(req,res)=>{
	res.send(`<h1>API RESTful en NodeJs para Servicios Embebidos</h1>`)
})

app.listen(PORT, ()=>{
	consol.log(`Servidor escuchando en el Puerto: ${PORT}`)
})