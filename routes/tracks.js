const express = require("express");
const router = express.Router();
const {getItems, getItem } = require("../controllers/tracks")
//Es el manejador de las rutas.

router.get("/", getItems)
router.get("/:id", getItem)


module.exports = router;