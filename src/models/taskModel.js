import mongoose from "mongoose";

//Estructura del Schema para las tareas
new schemaForUser = new mongoose.Schema({
  titleTask: {
    type: String,   //Tipo de dato string
    required: true, //Especifico que el campo sea obligatorio
  },
  descriptionTask: {
    type: String,   //Tipo de dato string
    required: true, //Especifico que el campo sea obligatorio
  },
  dateTask: {
    type: Date,  //Tipo de dato string
    default: Date.now //Fecha en que se crea la tarea
  },
}, {
    timestamps: true //Fltima fecha en que se actualizo este dato
});

//Exportar el modelo de tarea
export default mongoose.model('Task', taskSchema);
