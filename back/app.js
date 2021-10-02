require("dotenv").config();

// CONFIGURACION DEL SERVIDOR

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// AGREGAR LAS RUTAS A ESCUCHAR


// CONFIGURAR LA CONEXION A LA BASE DE DATOS


// INICIAR SERVIDOR
const port = process.env.PORT;
app.listen(port,() => console.log(`Sevidor  en  http://localhost:${port}`));