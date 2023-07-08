import React from "react";
import ButtonForm from "../components/buttons/buttonForm";
import TituloForm from "../components/titles/TituloForm";
import { useForm } from "react-hook-form"; //libreria para el control de formulario
// import { registeRequest } from "../api/auth.js";
import { useA } from "../context/AppContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerError } = useA();
  const history = useNavigate();
  // console.log(user);

  useEffect(() => {
    if (isAuthenticated) {
      history("/task");
    }
  }, [isAuthenticated, history]);

  return (
    <div className="container-fluid mt-5">
      <form
        onSubmit={handleSubmit(async (datos) => {
          // console.log(datos);
          // const respuesta = await registeRequest(datos);
          // console.log(respuesta);
          signup(datos);
        })}
        className="row"
      >
        <div className="col-12 col-md-4" style={{ width: "30%" }}>
          Proximamente imagen
        </div>
        <div className="col-12 col-md-8" style={{ width: "70%" }}>
          <div>
            <TituloForm className={"text-center"} text="Registrarse" />
          </div>
          {registerError.map((error, indice) => (
            <div key={indice}>{error}</div>
          ))}
          <div>
            <label htmlFor="">Nombre de Usuario: </label>
            <input
              type="text"
              placeholder="Ingrese el nombre de usuario"
              {...register("username", { required: true })}
            />
            {errors.username && <p>El Usuario es requerido</p>}
          </div>
          <div>
            <label htmlFor="">Correo: </label>
            <input
              type="email"
              placeholder="Ejm: xxxx@xxxx.com"
              {...register("email", { required: true })}
            />
            {errors.email && <p>El correo es requerido</p>}
          </div>

          <div>
            <label htmlFor="">Contraseña: </label>
            <input
              type="text"
              placeholder="Ingrese su contraseña"
              {...register("password", { required: true })}
            />
            {errors.password && <p>La contrasena es requerida</p>}
          </div>

          <ButtonForm
            typeButton="submit"
            classButton="btn btn-primary"
            text="Registrarse"
          />
        </div>
      </form>

      <p className="text-center">
        ¿Ya tienes una cuenta?{" "}
        <Link to="/login" style={{ textDecoration: "none" }}>
          Ingresa a tu cuenta
        </Link>
      </p>
    </div>
  );
};
export default Register;
