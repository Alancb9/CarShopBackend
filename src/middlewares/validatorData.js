//Middleware para validar el esquema
export const validationScheme = (schema) => (request, response, next) => {
  try {
    schema.parse(request.body); //Validamos con parse el schema, si lanza un error tumba el servidor por eso va dentro de un trycatch
    next();
  } catch (error) {
    // console.log(error.errors);
    return response
      .status(400)
      .json(error.errors.map((error) => error.message));
  }
};
