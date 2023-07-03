import { Router, request, response } from "express";
import { requiresAuthentication } from "../middlewares/validateToken.js";

//inicializacion del enrutador para su posterior uso
const router = Router();

//Cuando se haga una peticion get a tasks se requerira usuario autenticado
router.get("/tasks", requiresAuthentication, (request, response) => {
  response.send("task here! :D");
});

export default router;
