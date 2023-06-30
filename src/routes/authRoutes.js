import { Router } from "express";
import { login, register } from "../controllers/authController.js";

//inicializacion del enrutador para su posterior uso
const router = Router();

//Cuando se haga una peticion post a register se ejecuta la funcion register
router.post("/register", register);

//Cuando se haga una peticion post a login se ejecuta la funcion login
router.post("/login", login);

export default router;
