import { Router } from "express";
import { login, register, logout, profile } from "../controllers/authController.js";
import {requiresAuthentication} from '../middlewares/validateToken.js';

//inicializacion del enrutador para su posterior uso
const router = Router();

//Cuando se haga una peticion post a register se ejecuta la funcion register
router.post("/register", register);

//Cuando se haga una peticion post a login se ejecuta la funcion login
router.post("/login", login);

//Cuando se haga peticion post a logout se ejecuta la funcion logout
router.post('/logout', logout);

//Sirve para hacer la funcionalidad de autenticacion de rutas protegidas
router.get('/profile', requiresAuthentication, profile);

export default router;
