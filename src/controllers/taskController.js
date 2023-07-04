import Task from "../models/taskModel.js";

//Tareas de CRUD
export const gettingTasks = async (request, response) => {
  const tasksFound = await Task.find({
    userTask: request.user.id
  }).populate('userTask'); //Encontrar todas las tareas en las que su propiedad de id sea igual al id del usuario autenticado, se traen todos sus datos
  response.json(tasksFound);
};

 export const creatingTasks = async (request, response) => {
  const { titleTask, descriptionTask, dateTask } = request.body; //Desempaquetado del body
  const nTask = new Task({
    titleTask,
    descriptionTask,
    dateTask,
    userTask: request.user.id
  }); //Creacion y guardado de nueva tarea
  const savingTask = await nTask.save(); //Guardado de la tarea
  response.json(savingTask); //Retornar al cliente la tarea guardada
};

 export const gettingTask = async (request, response) => {
  const taskFound = await Task.findById(request.params.id).populate('userTask'); //Encontrar tareas por id, con datos completos del usuario
  if (!taskFound) {
    return response.status(404).json({msm: 'Task not found :c'}); //Si no encuentra la tarea retorna status 404
  }
  response.json(taskFound); //En caso de exito
};

 export const updatingTasks = async (request, response) => {
  const taskFound = await Task.findByIdAndUpdate(request.params.id, request.body, {
    new: true //Le especificamos que nos devuelva el dato nuevo no el viejo dado que moongose hace eso
  }); //Encontrar tareas y actualizar por id
  if (!taskFound) {
    return response.status(404).json({msm: 'Task not found :c'}); //Si no encuentra la tarea y no la actualiza, retorna status 404
  }
  response.json(taskFound); //En caso de exito
};

export const removingTasks = async (request, response) => {
  const taskFound = await Task.findByIdAndDelete(request.params.id); //Encontrar tareas y eliminar por id
  if (!taskFound) {
    return response.status(404).json({msm: 'Task not found :c'}); //Si no hay tarea eliminada significa que no encontraste nada
  }
  return response.sendStatus(204); //Eliminado con exito
};
