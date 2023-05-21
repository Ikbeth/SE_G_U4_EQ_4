const express = require('express')
const v1Sensors = require('./v1-sensors/routes/sensorsRoutes')
const v1Actuators = require('./v1-actuators/routes/actuatorsRoutes')
const {getConnection} = require('./models/conexion.js') 

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()) //json parser 

//vincula las rutas ("NOMBRE" QUE SE USARA PARA LLAMAR A LAS RUTAS)

const checkConexion = async function(){
    const SQL_QUERY = 'SELECT GETDATE() AS FECHA_COMPLETA'
    const conexion = await getConnection()

    console.log("Conexion Realizada con Exito!")
    
    const result = await conexion.request().query(SQL_QUERY)

    console.log(`Datos devueltos de la Query de prueba...`)

    console.log(result.recordset)  //DEVUELVE UNA LISTA DE OBJETOS

    console.log(result.recordset[0]) //DE LA LISTA DE OBJETOS SOLO SE RECUPERA UN OBJETO (EL PRIMERO EN ESTE CASO)

    console.log(result.recordset[0].FECHA_COMPLETA) //SE ACCEDE A UNA DE LAS PROPIEDADES DEL OBJETO DEVUELTO

}

checkConexion()

// http://localhost:3000
// /api/v1-actuators/actuators
// /api/v1-sensors/sensors

app.use("/api/v1-actuators/actuators", v1Actuators)
app.use("/api/v1-sensors/sensors", v1Sensors)

//Informacion que se despliega al acceder a http://localhost:3000/
app.get("/",(req,res)=>{
    res.send(`<h1>API RESTful en NodeJS para Servicios Embebidos</h1>`)
})

//inicia la api y ejecuta una funcion callback que retroalimenta el estado en la consola/terminal
app.listen(PORT, function(){ //()=>{  //funcion flecha
    console.log(`Servidor escuchando en el Puerto: ${PORT}`);
})