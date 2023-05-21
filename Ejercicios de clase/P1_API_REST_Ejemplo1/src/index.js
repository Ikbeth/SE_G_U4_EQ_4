const express = require('express') // importacion de modulo para crear la api
const v1Sensors = require('./v1/routes/sensorsRoutes') // importacion de rutas

const app = express();

const PORT = process.env.PORT || 3000;

//habilita a la api para trabajar con json
app.use(express.json()) //json parser

//vincula las rutas ("NOMBRE" QUE SE USARA PARA LLAMAR A LAS RUTAS)
app.use("/api/v1/sensors", v1Sensors)

///////////////Informacion que se despliega al acceder a http://localhost:3000/ ...
//crea un metodo get para desplegar informacion en la ventana principal 
//(No es necesario y en muchos casos tampoco de utilidad)
app.get("/",(req,res)=>{
    res.send(`<h1>API RESTful en NodeJS para Servicios Embebidos</h1>`)
})
//////////////////

//inicia la api y ejecuta una funcion callback que retroalimenta el estado en la consola/terminal
app.listen(PORT, function(){ //()=>{
    console.log(`Servidor escuchando en el Puerto: ${PORT}`);
})

//Para hacer pruebas es necesario algun programa o extension que permita ejecutar peticiones http
//Ejemplo: POSTMAN

//EN EL NAVEGADOR ES DE UTILIDAD USAR UNA EXTENSION COMO: JSON FORMATTER SI SE TRABAJARA EN JSON



//INFORMACION ADICIONAL:
/*
100: Códigos informativos: 
    Significa que el servidor reconoce la petición iniciada por el buscador y está siendo procesada (100–199)

200: Códigos de éxito: 
    La solicitud ha sido recibida, entendida o procesada por el buscador (200–299)

300: Códigos de redirección: 
    Un nuevo destino ha sido sustituido para la fuente solicitada. Es posible que se requieran acciones adicionales por parte del navegador (300–399)

400: Códigos de error de cliente: 
    La web o página no ha sido alcanzada; la página no está disponible o ha ocurrido un problema técnico con la solicitud (400–499)

500: Códigos de error del servidor: 
    La solicitud ha sido aceptada, pero debido a un error con el servidor, no se ha podido completar la petición (500–599)
*/