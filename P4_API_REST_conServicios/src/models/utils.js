//Importa el modulo fs para trabajar con el sistema de archivos del servidor/equipo
const fs = require("fs");

//Realiza la escritura del archivo json
const guardaBaseDeDatos = (database) => {
  fs.writeFileSync("./src/models/database.json", JSON.stringify(database, null, 2), {
    encoding: "utf8",
  });
};

//EXPORTA LA FUNCION PARA HACER POSIBLE SU POSTERIOR IMPORTANCION Y USO EN OTROS MODULOS
module.exports = { guardaBaseDeDatos };