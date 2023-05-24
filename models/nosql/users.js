//Para crear un modelo primero hay que requerir a el gesto que estamos usando que en este caso es mongoose.

const mongoose = require("mongoose");

//Despues declarar el esquema que vamos a usar, la estructura

const userScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
        },
    role: {
        type: ["User", "Admin"], // Se puede dar el caso que solo vas a necesitar dos valores(limitado), y pues puedes hacer esto.
        default: "User", // Se puede poner un valor por defecto.
    }
  },
    {
        timestamps: true, // TODO createdAt, UpdatedAt
        versionKey: false
  }
);



//Con eesto ya tenemos un modelo creado

// En la primera estrutura se va a declarar todo la estrutura del objecto. a cada uno en ves de pasr un valor le vas a pasar el tipo de datos que va a ser. unique es para decir que es uno y que no se puede repetir

//El segundo apartado se utiliza para que automaticamente se creen los capos necesarios para las marcas de tiempo


module.exports = mongoose.model("users", userScheme)
//Estos necesitan algo mas que esportacion, hay que espicificar que.
//hay que decirle que quieres que esportes un modelo y dentro de los () pasas dos parametros que son el nombre de la colecion("nombre de la tabla "), y el siquiente parametro es la estrutura que creaste


// Con esto ya esta completamente creado