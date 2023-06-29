import mongoose from "mongoose";

//Configuracion de la coneccion a la DB de mongo controlando errores
const connectDataBase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kecabo1994:dVrlQuqMICWA2Ee8@users.2vi2u5a.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("successful connection")
  } catch (error) {
    console.log(error);
  }
};

export default connectDataBase;
