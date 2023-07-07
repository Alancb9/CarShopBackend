import React from "react";
import ButtonForm from "../components/buttons/buttonForm";
import TituloForm from "../components/titles/TituloForm";
import { useForm } from "react-hook-form"; //libreria para el control de formulario
import { registeRequest } from "../api/auth.js";

const Register = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="container-fluid mt-5">
      <form
        onSubmit={handleSubmit(async (datos) => {
          console.log(datos);
          const respuesta = await registeRequest(datos);
          console.log(respuesta);
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
          <div>
            <label htmlFor="">Nombre de Usuario: </label>
            <input
              type="text"
              placeholder="Ingrese el nombre de usuario"
              {...register("username", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="">Correo: </label>
            <input
              type="email"
              placeholder="Ejm: xxxx@xxxx.com"
              {...register("email", { required: true })}
            />
          </div>

          <div>
            <label htmlFor="">Contraseña: </label>
            <input
              type="text"
              placeholder="Ingrese su contraseña"
              {...register("password", { required: true })}
            />
          </div>

          <ButtonForm
            typeButton="submit"
            classButton="btn btn-primary"
            text="Registrarse"
          />
        </div>
      </form>
    </div>
  );
};
export default Register;
