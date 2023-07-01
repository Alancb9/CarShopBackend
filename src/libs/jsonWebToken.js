import jsonWebToken from "jsonwebtoken";

//Encapsulamiento de la funcionalidad del JWT como una promesa
export const createJsonWebToken = (payload) => {
  return new Promise((resolve, reject) => {
    //Generacion del JWT con tiempo de expiracion de 1 dia
    jsonWebToken.sign(
      payload,
      "secretinvasion",
      {
        expiresIn: "1d",
      },
      (error, token) => {
        if (error) {
          reject(error);
        } else {
          resolve(token);
        }
      }
    );
  });
};


