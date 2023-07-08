import React from "react";
import ButtonForm from "../components/buttons/buttonForm";
import TituloForm from "../components/titles/TituloForm";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"; //libreria para el control de formulario
import { useA } from "../context/AppContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinError } = useA();

  const onSubmit = handleSubmit((data) => {
    console.log(data, "hola");
    signin(data);
  });

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12 col-md-4" style={{ width: "30%" }}>
          <form onSubmit={onSubmit}>
            <div>
              <TituloForm
                className={"text-center"}
                text="Ingrese a su cuenta"
              />
            </div>
            {signinError.map((error, indice) => (
              <div key={indice}>{error}</div>
            ))}
            <div>
              <label htmlFor="">Correo: </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Ingrese su correo"
              />
              {errors.email && <p>El correo es requerido</p>}
            </div>
            <div>
              <label htmlFor="">Contraseña: </label>
              <input
                type="text"
                {...register("password", { required: true })}
                placeholder="Ingrese su contraseña"
              />
              {errors.password && <p>La contrasena es requerida</p>}
            </div>

            <div>
              <p className="text-center">
                ¿No tienes una cuenta?{" "}
                <Link to="/register" style={{ textDecoration: "none" }}>
                  Registrarse
                </Link>
              </p>
            </div>

            <ButtonForm
              typeButton="submit"
              classButton="btn btn-primary"
              text="Ingresar"
            />
          </form>
        </div>
        <div className="col-12 col-md-8" style={{ width: "70%" }}>
          Proximamente imagen
        </div>
      </div>
    </div>
  );
};

export default Login;
