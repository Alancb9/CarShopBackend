import { Router } from "express";
import {
  login,
  register,
  logout,
  profile,
} from "../controllers/authController.js";
import { requiresAuthentication } from "../middlewares/validateToken.js";
import { validationScheme } from "../middlewares/validatorData.js"; //Importacion de la validacion del esquema
import {
  recordValidationSchema,
  loginValidationSchema,
} from "../schemas/authSchema.js"; //Importacion de los esquemas de login y registro
//inicializacion del enrutador para su posterior uso
const router = Router();

//Cuando se haga una peticion post a register se ejecuta la validacion del esquema de registro(middleware) y la funcion register
router.post("/register", validationScheme(recordValidationSchema), register);

//Cuando se haga una peticion post a login se ejecuta la validacion del esquema de login(middleware) y la funcion login
router.post("/login", validationScheme(loginValidationSchema), login);

//Cuando se haga peticion post a logout se ejecuta la funcion logout
router.post("/logout", logout);

//Sirve para hacer la funcionalidad de autenticacion de rutas protegidas
router.get("/profile", requiresAuthentication, profile);

export default router;
