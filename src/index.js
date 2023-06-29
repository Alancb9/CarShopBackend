import app from "./app.js";
import connectDataBase from "./db.js";

//Inicia la conexion a la base de datos
connectDataBase();

//El servidor se inicializara en el puerto 3000
app.listen(3000);
console.log("Server run on port", 3000);
