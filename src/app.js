import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser"; // middleware que nos permite convertir un cookie str en Json
//instanciamos el servidor
import taskRoutes from './routes/taskRoutes.js'

const app = express();

//le decimos a la aplicacion que utilice morgan con la configuracion de
app.use(morgan("dev"));
app.use(express.json());

//Convertidor de cookies en json
app.use(cookieParser());

//Procesamiento de rutas
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;
