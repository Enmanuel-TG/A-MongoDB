const mongoose = require("mongoose");
//Declaracion del paquete de mongo que se va a usar

const dbConnect = () => { };
const DB_URI = process.env.DB_URI;
// Llamando de .env la direccion de conexión con la base de datos.
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conexión exitosa a la base de datos');
    // Aquí puedes continuar con tu lógica después de la conexión exitosa
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

//Exportacion de este modulo que se va a usar en otro lugar
module.exports = dbConnect;

//esto Solo es la configuracion para la conexion con la BD
