require("dotenv").config();
//Diciendole a la apk que use la variables de entorno
const express = require("express");
// Declaracion de express que es quien no va a ayudar a inicar a levantar un servicio web
const cors = require("cors");

const dbConnect = require("./config/mongo");

// Evita errores de origen crusado entre navegadores.
const app = express();
app.use(cors());
// Indica a la app que use esa libreria

const post = process.env.PORT || 5052;
// establece el puerto tal lugar usando la variable de entorno y si no la encuentra usa la 5052

//Aqui se invocan a las rutas

/* app.use("/api", require("./routes/tracks"));
*/

// que a app haga uso de esto, se puede agragar un prefijo que es api en este caso, y loego el modulo que se esta requiriondo que se veria tal que asi localhost/api/tracks       el routes no aparece por que es una direcion lo que tiene que aparecer el el modulo o el nombre que le pusiste.

app.use("/api", require("./routes"));
//Esta manera es mas optima si le borras el nombre de el modulo hace referencia directa al index.js y pues ahi vas a hacer el trabajo que corresponde para que no se este repitiendo por cada modulo.

//Indica a la app que escuche el puerto que se le da y que haga tal cosa
app.listen(post, () => {
    console.log("Hola")
})

dbConnect();