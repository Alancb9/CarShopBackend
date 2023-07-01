import User from "../models/userModel.js";
import bcrypt from "bcryptjs"; // libreria de encriptacion
import {createJsonWebToken} from "../libs/jsonWebToken.js";

export const register = async (request, response) => {
  const { email, password, username } = request.body;

  try {
    //Metodo hash para encriptar la contrasena, nos da como resultado un str aleatorio
    const encryptedPassword = await bcrypt.hash(password, 10);

    //Creamos un nuevo objeto que va a recibir los datos
    const newUser = new User({
      email,
      password: encryptedPassword, //Paso como valor la contrasena encriptada
      username,
    });
    // console.log(newUser);

    //Guardamos en mongoDB
    const userSaved = await newUser.save();

    //creacion del token
    const token = await createJsonWebToken({id: userSaved._id})

    
    //response.json({ token }); //Devuelve token
    response.cookie("token", token);
    // response.json({
    //   msm: "User successfully",
    // });

    //Devolvemos el dato json sin el password
    response.json({
      id: userSaved._id,
      email: userSaved.email,
      username: userSaved.username,
      createsAt: userSaved.createdAt,
      updatesAt: userSaved.updatedAt,
    });
  } catch (error) {
    response.status(500).json({msm: error.msm})
  }
};
export const login = (request, response) => response.send("login");
