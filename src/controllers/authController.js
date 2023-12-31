import User from "../models/userModel.js";
import bcrypt from "bcryptjs"; // libreria de encriptacion
import { createJsonWebToken } from "../libs/jsonWebToken.js";
import jsonWebToken from "jsonwebtoken";; //Importar jsonwebtoken
import { TOKEN_SECRET } from "../config.js";

export const register = async (request, response) => {
  const { email, password, username } = request.body;

  try {
    //Validacion para correo usado
    const usedMail = await User.findOne({ email });
    if (usedMail) {
      return response.status(400).json(["The email is in use"]);
    }

    //Metodo hash para encriptar la contrasena, nos da como resultado un str aleatorio
    const encryptedPassword = await bcrypt.hash(password, 10);

    //Creamos un nuevo objeto que va a recibir los datos
    const newUser = new User({
      email,
      password: encryptedPassword, //Paso como valor la contrasena encriptada
      username,
    });
  

    //Guardamos en mongoDB
    const userSaved = await newUser.save();

    //creacion del token
    const token = await createJsonWebToken({ id: userSaved._id });

    
    response.cookie("token", token);
  

    //Devolvemos el dato json sin el password
    response.json({
      id: userSaved._id,
      email: userSaved.email,
      username: userSaved.username,
      createsAt: userSaved.createdAt,
      updatesAt: userSaved.updatedAt,
    });
  } catch (error) {
    //En caso de error retornamos status 500
    response.status(500).json({ message: error.message });
  }
};

export const login = async (request, response) => {
  // A diferencia del register no necesito el username
  const { email, password } = request.body;

  try {
    //Busqueda del usuario
    const userFoundToUse = await User.findOne({ email });

    //En caso de que no se encuentre el usuario retorna estatus 400
    if (!userFoundToUse) {
      return response.status(400).json({ msm: "User not Found :(" });
    }

    //Delvuelve true o false dependiendo si conincide con el password de la DB
    const coincided = await bcrypt.compare(password, userFoundToUse.password);

    //SI no coincide retorna estatus 400 contrasena incorrecta
    if (!coincided) {
      return response.status(400).json({ msm: "Incorrect password :(" });
    }

    //creacion del token con el usuario guardado userFoundToUse
    const token = await createJsonWebToken({ id: userFoundToUse._id });

    //response.json({ token }); //Devuelve token
    response.cookie("token", token);

    //Devolvemos el dato json sin el password
    response.json({
      id: userFoundToUse._id,
      email: userFoundToUse.email,
      username: userFoundToUse.username,
      createsAt: userFoundToUse.createdAt,
      updatesAt: userFoundToUse.updatedAt,
    });
  } catch (error) {
    response.status(500).json({ msm: error.msm });
  }
};

export const logout = (request, response) => {
  //Cuando se haga un logout el token estara vacio y le damos la expiracion
  response.cookie("token", "", {
    expires: new Date(0),
  });
  return response.sendStatus(200);
};

export const profile = async (request, response) => {
  //Busca los datos a los cuales pertenecen el id especificado y  los guardamos en foundUserData
  const foundUserData = await User.findById(request.user.id);

  //Si no encuentra ningun usuario retornamos status, usuario no encontrado
  if (!foundUserData) {
    return response.status(400).json({ msm: "User not found :c" });
  }

  //En caso de que si lo encuentre retorna sus datos correspondientes
  return response.json({
    id: foundUserData._id,
    username: foundUserData.username,
    email: foundUserData.email,
    createAt: foundUserData.createdAt,
    updatedAt: foundUserData.updatedAt,
  });
};

export const verifyToken = async (request, response) => {
  //Obtiene el token de las cookies
  const { token } = request.cookies;

  if (!token) {
    //Si no hay token retorna status 401
    return response.status(401).json({ msm: "No autorized" });
  }

  jsonWebToken.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) {
      return response.status(401).json({ msm: "No autorized" });
    }
    //Usuario autenticado encontrado
    const userFound = await User.findById(user.id);
    if (!userFound) {
      //Si no encuentra el usuario retorna status 401
      return response.status(401).json({ msm: "No autorized" });
    }
    //Si lo encuentra retorna sus datos
    return response.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email
    });
  });
};
