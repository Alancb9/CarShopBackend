import React from "react";
import ButtonForm from "../components/buttons/buttonForm";
// import TituloForm from "../components/titles/TituloForm";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form"; //libreria para el control de formulario
import { useA } from "../context/AppContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //useA es un custom hook que se encuentra en el archivo AppContext.jsx
  const { signin, isAuthenticated, errors: signinError } = useA();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  //Si el usuario esta autenticado lo redirigimos a la pagina de cliente
  if (isAuthenticated) {
    return <Navigate to="/cliente" replace />;
  }

  return (
    <div id="principal" className="container-fluid mt-5">
      <div className="row">
        <div className="col-12 col-md-4 mt-5 pt-5 px-5" style={{ width: "30%" }}>
          <form onSubmit={onSubmit} className="form-login">
            <div>
              <h3 className="text-center">Ingrese a su cuenta</h3>
            </div>
            {signinError.map((error, indice) => (
              <div key={indice}>{error}</div>
            ))}
            <div className="mt-4">
              <div>
                <label htmlFor="email" className="form-label">Correo: </label>
              </div>
              <div>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Ingrese su correo"
                  className="form-control rounded mt-2 w-100"
                />
              </div>
              {errors.email && <p className="alert alert-danger" role="alert">El correo es requerido</p>}
            </div>
            <div className="mt-3">
              <div>
                <label htmlFor="password" className="form-label">Contraseña: </label>
              </div>
              <div>
                <input
                  type="text"
                  {...register("password", { required: true })}
                  placeholder="Ingrese su contraseña"
                  className="form-control rounded mt-2 w-100 h-auto"
                />
              </div>
              {errors.password && <p className="alert alert-danger" role="alert">La contrasena es requerida</p>}
            </div>

            <div className="mt-4 ">
              <p className="text-center ">
        
                ¿No tienes una cuenta?{" "}
                <Link to="/register" style={{ textDecoration: "none" }}>
                  Registrarse
                </Link>
              </p>
            </div>
            <div className="text-end">
              <ButtonForm
                typeButton="submit"
                classButton="btn btn-primary"
                text="Ingresar"
              />
            </div>
          </form>
        </div>
        <div className="col-12 col-md-8 pe-0 ps-0" style={{ width: "70%" }}>
          <img
            src="https://www.lavanguardia.com/uploads/2020/03/30/5f1604cbdda51.jpeg"
            alt="Próximamente imagen"
            className="img-fluid"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
