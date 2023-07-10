import jsonwebtoken from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

// Autenticacion con token para ejecutar la siguiente ruta con next
export const requiresAuthentication = (request, response, next) => {
  const { token } = request.cookies;

  //Validacion de si llego el token
  if (!token) {
    return response.status(401).json({ msm: "Authorization denied :c" });
  }

  //Verificamos el token
  jsonwebtoken.verify(token, TOKEN_SECRET, (error, decodedToken) => {
    if (error) {
      return response.status(403).json({ msm: "Invalid token :c" });
    }

    request.user = decodedToken;
  });
  next();
};
