import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser"; // middleware que nos permite convertir un cookie str en Json
//instanciamos el servidor
import taskRoutes from "./routes/taskRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import cors from "cors"; //Libreria para poder comunicarnos en dominios diferentes
const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'http://192.168.100.4:3000'],
    credentials: true
})); //Especifico que dominios se pueden comunicar con el back

app.use((req, res, next) => {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Origin", "http://192.168.100.4:3000");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

//le decimos a la aplicacion que utilice morgan con la configuracion de
app.use(morgan("dev"));
app.use(express.json());

//Convertidor de cookies en json
app.use(cookieParser());

//Procesamiento de rutas
app.use("/api", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", orderRoutes);
export default app;
