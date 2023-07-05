import { Router } from "express";
import { requiresAuthentication } from "../middlewares/validateToken.js";
import {
  gettingTasks,
  gettingTask,
  creatingTasks,
  updatingTasks,
  removingTasks,
} from "../controllers/taskController.js";
import { validationScheme } from "../middlewares/validatorData.js"; //Esquema de validacion de datos
import { taskValidationSchema } from "../schemas/taskSchema.js";

//Inicializacion del enrutador para su posterior uso (CRUD)
const router = Router();

//Cuando se haga una peticion get a tasks(todas las tareas) se requerira usuario autenticado
router.get("/tasks", requiresAuthentication, gettingTasks);

//Cuando se haga una peticion get a tasks(Una sola tarea) se requerira usuario autenticado
router.get("/tasks/:id", requiresAuthentication, gettingTask);

//Ruta para crear tareas con metodo post, se requiere autenticacion, se validan los datos y se crea la tarea si pasan los filtros middlewares
router.post(
  "/tasks",
  requiresAuthentication,
  validationScheme(taskValidationSchema),
  creatingTasks
);

//Ruta para eliminar tareas con metodo post, esta ruta requerira in id, se requiere autenticacion
router.delete("/tasks/:id", requiresAuthentication, removingTasks);

//Ruta para actualizar tareas con metodo put
router.put("/tasks/:id", requiresAuthentication, updatingTasks);

export default router;
