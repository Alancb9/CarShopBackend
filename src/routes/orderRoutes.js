import { Router } from "express";
import { validationScheme } from "../middlewares/validatorData.js"; //Importacion de la validacion del esquema
import { login, register, logout } from "../controllers/authController.js";
import { updateOrder } from "../controllers/orderController.js";
import { orderValidationSchema } from "../schemas/orderSchema.js"; //Importacion de los esquemas de login y registro
import {
  recordValidationSchema,
  loginValidationSchema,
} from "../schemas/authSchema.js"; //Importacion de los esquemas de login y registro
import { requiresAuthentication } from "../middlewares/validateToken.js";

const router = Router();

router.post(
  "/registerfororder",
  validationScheme(recordValidationSchema),
  register
);

router.post("/loginfororder", validationScheme(loginValidationSchema), login);

// Ruta protegida con JWT utilizando el nuevo middleware
router.put(
  "/tasks/:taskId/status",
  requiresAuthentication,
  validationScheme(orderValidationSchema),
  updateOrder
);

//Cuando se haga peticion post a logout se ejecuta la funcion logout
router.post("/logoutorder", logout);

export default router;
