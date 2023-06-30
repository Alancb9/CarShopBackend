import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";

//instanciamos el servidor
const app = express();

//le decimos a la aplicacion que utilice morgan con la configuracion de
app.use(morgan("dev"));
app.use(express.json());

//Procesamiento de rutas
app.use("/api", authRoutes);

export default app;
