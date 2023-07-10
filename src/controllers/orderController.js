import Task from '../models/taskModel.js';

// Controlador para actualizar el estado de una tarea específica
export const updateOrder = async (request, res) => {
//   const { taskId } = request.params;
  const { state, id } = request.body;
  try {
    // Buscar la tarea por ID
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    // Actualizar el estado de la tarea
    task.stateTask = state;
    await task.save();

    // Enviar la respuesta con la tarea actualizada
    res.json({ message: 'Estado de la tarea actualizado', task });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el estado de la tarea', error });
  }
};

