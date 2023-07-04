import mongoose from "mongoose";

//Estructura del Schema para las tareas
const schemaFortask = new mongoose.Schema(
  {
    titleTask: {
      type: String, //Tipo de dato string
      required: true, //Especifico que el campo sea obligatorio
    },
    descriptionTask: {
      type: String, //Tipo de dato string
      required: true, //Especifico que el campo sea obligatorio
    },
    dateTask: {
      type: Date, //Tipo de dato string
      default: Date.now, //Fecha en que se crea la tarea
    },
    userTask: {
      type: mongoose.Schema.Types.ObjectId, //Id de mongoDb que referencia a otro modelo
      ref: "User", //Referencia al modelo user
      required: true,  //Especifico que el campo sea requerido
    },
  },
  {
    timestamps: true, //Fltima fecha en que se actualizo este dato
  }
);

//Exportar el modelo de tarea
export default mongoose.model("Task", schemaFortask);
