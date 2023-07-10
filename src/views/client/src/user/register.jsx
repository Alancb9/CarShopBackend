import React from "react";
import ButtonForm from "../components/buttons/buttonForm";
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
      history("/tasks");
    }
  }, [isAuthenticated, history]);

  return (
    <div id="principal" className="container-fluid mt-5">
      <form
        onSubmit={handleSubmit(async (datos) => {
          // console.log(datos);
          // const respuesta = await registeRequest(datos);
          // console.log(respuesta);
          signup(datos);
        })}
        className="row"
        
      >
        <div className="col-12 col-md-4 pe-0 ps-0" style={{ width: "40%" }}>
          <img
            src="https://img.freepik.com/vector-premium/plantilla-formulario-registro-diseno-plano_23-2147976665.jpg?w=740"
            alt="Próximamente imagen"
            className="img-fluid"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="col-12 col-md-8 pt-5 px-5 mt-5" style={{ width: "60%" }}>
          <div className="col-12" >
            <h3 className="text-center">Registrarse</h3>
          </div>
          {registerError.map((error, indice) => (
            <div key={indice}>{error}</div>
          ))}
          <div className="mt-2">
            <div className="col-12">
              <label htmlFor="userame" className="form-label">Nombre de Usuario: </label>
            </div>
            <div className="col-12">
              <input
                type="text"
                placeholder="Ingrese el nombre de usuario"
                {...register("username", { required: true })}
                className="form-control rounded  w-100"
              />
            </div>
            {errors.username && <p className="alert alert-danger" role="alert">El Usuario es requerido</p>}
          </div>
          <div className="mt-2">
            <div className="col-12">
              <label htmlFor="email" className="form-label">Correo: </label>
            </div>
            <div className="col-12">
              <input
                type="email"
                placeholder="Ejm: xxxx@xxxx.com"
                {...register("email", { required: true })}
                className="form-control rounded w-100"
              />
            </div>
            {errors.email && <p className="alert alert-danger" role="alert">El correo es requerido</p>}
          </div>

          <div className="mt-2">
            <div className="col-12">
              <label htmlFor="passwrod" className="form-label">Contraseña: </label>
            </div>
            <div className="col-12">
              <input
                type="text"
                placeholder="Ingrese su contraseña"
                {...register("password", { required: true })}
                className="form-control rounded w-100"
              />
            </div>
            {errors.password && <p className="alert alert-danger" role="alert">La contrasena es requerida</p>}
          </div>
          <div className="text-end mt-4">
            <ButtonForm
              typeButton="submit"
              classButton="btn btn-primary"
              text="Registrarse"
            />
          </div>
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
