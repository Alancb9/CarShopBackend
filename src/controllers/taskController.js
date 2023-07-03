import Task from "../models/taskModel.js";

//Tareas de CRUD

const gettingTasks = async (request, response) => {
  const tasksFound = await Task.find(); //Encontrar tareas
  response.json(tasksFound);
};

const creatingTasks = async (request, response) => {
  const { title, description, date } = req.body; //Desempaquetado del body
  const nTask = new Task({
    title,
    description,
    date,
  }); //Creacion y guardado de nueva tarea
  const savingTask = await nTask.save(); //Guardado de la tarea
  response.json(savingTask); //Retornar al cliente la tarea guardada
};

const gettingTask = async (request, response) => {
    
};

const updatingTasks = async (request, response) => {};

const removingTasks = async (request, response) => {};
