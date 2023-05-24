const express = require("express")
const fs = require("fs")
const router = express.Router();

const PATH_ROUTER = __dirname; //Es una constante de node que da la ruta absoluta de donde se encuentra este archivo

const removeExtension =  (fileName) => {
    return fileName.split(".").shift()//split crea un arreglo y divide la cadadena de texto cada vez que encuntra un . y el shift hace que tome el primer valor solamente para retornalo.
};
// Funcion con el objectivo de quitar el .js a cada archivo que hay y retornarlo.

fs.readdirSync(PATH_ROUTER).filter((file) => {
    const name = removeExtension(file)// la  funcion de arriba hara que se le quite el .js y estos se guarden en una variable llamada name (recuerda que el index no va) entoces

    if (name !== "index") {// omite el archivo index 
        console.log("Cargando las rutas")
        router.use(`/${name}`, require(`./${file}`));// Esto es la carga dinamica de la ruta con su controlador concatenado dos cosas el nombre y el controlador

     }
})

//Con fs se va a hacer uso de una funcion readdirSync que se llama leer el directorio de manera asincrona y va a leer el directorio de PATH_POUTER y esto va a devolver un arreglo
module.exports = router;