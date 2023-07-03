import mongoose from "mongoose";

//Estructura del schema junto con los datos y su tipo de datos
const schemaForUser = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true, //Especificamos que el campo sea obligatorio
      trim: true, //Quitamos los espacios al inicio y al final
    },
    email: {
      type: String,
      required: true, //Especificamos que el campo sea obligatorio
      trim: true, //Quitamos los espacios al inicio y al final
      unique: true, //Especificamos que el email sea unico
    },
    password: {
      type: String,
      required: true, //Especificamos que el campo sea obligatorio
      trim: true, //Quitamos los espacios al inicio y al final
    },
  },
  {
    timestamps: true, //ultima fecha en que se actualizo este dato
  }
);

//exportar el modelo de usuario
export default mongoose.model("User", schemaForUser);
