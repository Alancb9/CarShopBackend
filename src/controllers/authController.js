import User from "../models/userModel.js";

export const register = (request, response) => {
  const { email, password, username } = request.body;

  //Creamos un nuevo objeto que va a recibir los datos
  const newUser = new User({
    email,
    password,
    username,
  });
  console.log(newUser);

  response.send("registrando siuuu");
};
export const login = (request, response) => response.send("login");
