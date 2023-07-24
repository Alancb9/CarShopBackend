import mongoose from "mongoose";


//Estructura del Schema para las tareas
const schemaFortask = new mongoose.Schema(
  {
    client: {
      type: String, //Tipo de dato string
      required: true, //Especifico que el campo sea obligatorio
    },
    email: {
      type: String, //Tipo de dato string
      required: true, //Especifico que el campo sea obligatorio
    },
    carStatus: {
      type: String, //Tipo de dato string
      required: true, //Especifico que el campo sea obligatorio
    },
    orderDate: {
      type: String, //Tipo de dato string
      required: true, //Especifico que el campo sea obligatorio
    },
    personalIdentification: {
      type: String, //Tipo de dato string
      required: true, //Especifico que el campo sea obligatorio
    },
    carBrand: {
      type: String, //Tipo de dato string
      required: true, //Especifico que el campo sea obligatorio
    },
    carModel: {
      type: String, //Tipo de dato string
      required: true, //Especifico que el campo sea obligatorio
    },
    tankLevel: {
      type: String, //Tipo de dato string
      required: true, //Especifico que el campo sea obligatorio
    },
    contactNumber: {
      type: String, //Tipo de dato string
      required: true, //Especifico que el campo sea obligatorio
    },
    plaqueCar: {
      type: String, //Tipo de dato string
      required: true, //Especifico que el campo sea obligatorio
    },
    selectedServices: {
      type: Array, //Tipo de dato string
      required: true, //Especifico que el campo sea obligatorio
    },
    idType: {
      type: String, //Tipo de dato string
      required: true, //Especifico que el campo sea obligatorio
    },
    stateTask: {
      type: String, //Tipo de dato string
      required: true, //Especifico que el campo sea obligatorio
      default: "Enviada", //Estado por defecto de la tarea
    },
    dateTask: {
      type: Date, //Tipo de dato string
      default: Date.now, //Fecha en que se crea la tarea
    },
    userTask: {
      type: mongoose.Schema.Types.ObjectId, //Id de mongoDb que referencia a otro modelo
      ref: "User", //Referencia al modelo user
      required: true, //Especifico que el campo sea requerido
    },
  },
  {
    timestamps: true, //Fltima fecha en que se actualizo este dato
  }
);

//Exportar el modelo de tarea
export default mongoose.model("Task", schemaFortask);
