// import Order from "../models/orderModel.js";

// export const updateOrder = async (request, response) => {
//   const { id, status } = request.body;

//   try {
//     //Busqueda de la orden
//     const orderFound = await Order.findOne({ id });

//     //En caso de que no se encuentre la orden retorna estatus 400
//     if (!orderFound) {
//       return response.status(400).json({ msm: "Order not Found :(" });
//     }

//     orderFound.status = status;
//     //Guardamos en mongoDB
//     await orderFound.save();

//     response.json({
//       msm: "Order updated successfully",
//       orderFound,
//     });
//   } catch (error) {
//     response.status(500).json({ msm: 'ERROR:', error: error.message });
//   }
// };
import Task from '../models/taskModel.js';

// Controlador para actualizar el estado de una tarea específica
export const updateOrder = async (request, res) => {
//   const { taskId } = request.params;
  const { state, id } = request.body;
  console.log("hola1");
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

