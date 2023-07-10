import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import TituloForm from "../components/titles/TituloForm.jsx";
import ButtonForm from "./buttons/buttonForm.jsx";
import ParagraphsForm from "./paragraphs/paragraphsForm.jsx";
import { createDataRequest } from "../api/dataEntry";


const OrdenTrabajo = () => {
  const { state } = useContext(AppContext);
  const history = useNavigate();

  const fechaGeneracion = new Date().toLocaleString();

  // Calcular la fecha estimada de entrega sumando 7 días a la fecha de generación
  const fechaEstimadaEntrega = new Date();
  fechaEstimadaEntrega.setDate(fechaEstimadaEntrega.getDate() + 7);
  const fechaEstimadaEntregaString = fechaEstimadaEntrega.toLocaleString();

  // AWS
  const lista = [];
  state.servicios.map((servicio) => lista.push(servicio));

  const orderData = {
    client: state.cliente.nombre,
    email: state.cliente.email,
    carStatus: state.vehiculo.estadoExterior,
    orderDate: fechaGeneracion,
    personalIdentification: state.cliente.identificacion,
    carBrand: state.vehiculo.marca,
    carModel: state.vehiculo.modelo,
    tankLevel: state.vehiculo.nivelTanque,
    contactNumber: state.cliente.contacto,
    plaqueCar: state.vehiculo.placa,
    selectedServices: lista,
    idType: state.cliente.tipoIdentificacion,
    stateTask: "Enviada",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(orderData);
    

    const respuesta = await createDataRequest(orderData);
    console.log(respuesta);

    history("/exito"); // Ir A la pagina de exito
  };

  const handleAtrasClick = () => {
    history("/servicios");
  };

  return (
    <div className="container my-4">
      <TituloForm className={"text-center"} text="Orden de trabajo" />

      <div className="form-container">
        {/* Presentacion de todos los datos ingresados anteriormente para que el usuario pueda verificar y aprobar la orden */}
        <form onSubmit={handleSubmit} className="form-cliente">
          <div className="row mt-3">
            <div className="col-md-6">
              <div id="cliente" className="form-section pe-1 ps-5">
                <h4>Datos del cliente:</h4>
                <ParagraphsForm
                  classParagraph=""
                  textStrong="Nombre: "
                  textparagraph={state.cliente.nombre}
                />
                <ParagraphsForm
                  classParagraph=""
                  textStrong="Email: "
                  textparagraph={state.cliente.email}
                />
                <ParagraphsForm
                  classParagraph=""
                  textStrong="Número de contacto: "
                  textparagraph={state.cliente.contacto}
                />
                <ParagraphsForm
                  classParagraph=""
                  textStrong={`${state.cliente.tipoIdentificacion}: `}
                  textparagraph={state.cliente.contacto}
                />
              </div>
            </div>
            <div className="col-md-6 ps-5">
              <div className="form-section">
                <h4>Datos del vehículo:</h4>
                <ParagraphsForm
                  classParagraph=""
                  textStrong="Marca: "
                  textparagraph={state.vehiculo.marca}
                />
                <ParagraphsForm
                  classParagraph=""
                  textStrong="Modelo: "
                  textparagraph={state.vehiculo.modelo}
                />
                <ParagraphsForm
                  classParagraph=""
                  textStrong="Placa: "
                  textparagraph={state.vehiculo.placa}
                />
                <ParagraphsForm
                  classParagraph=""
                  textStrong="Nivel del tanque: "
                  textparagraph={state.vehiculo.nivelTanque}
                />
              </div>
            </div>
          </div>

          <div id="estadoVehiculo" className="form-section ps-5">
            <ParagraphsForm
              classParagraph=""
              textStrong="Estado exterior del vehículo: "
              textparagraph={state.vehiculo.estadoExterior}
            />
          </div>

          <div id="serviciosSeleccionados" className="form-section ps-5">
            <h4>Servicios seleccionados:</h4>
            <ul>
              {state.servicios.map((servicio) => (
                <li key={servicio}>{servicio}</li>
              ))}
            </ul>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <div className="form-section  ps-5">
                <ParagraphsForm
                  classParagraph=""
                  textStrong="Fecha de generación de orden: "
                  textparagraph={fechaGeneracion}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-section  ps-5">
                <ParagraphsForm
                  classParagraph=""
                  textStrong="Fecha estimada de entrega: "
                  textparagraph={fechaEstimadaEntregaString}
                />
              </div>
            </div>
          </div>

          <div
            id="botones"
            className="d-md-flex justify-content-md-end mt-4 mb-1"
          >
            <ButtonForm
              typeButton="button"
              classButton="btn btn-primary me-md-2"
              text="Atrás"
              onClickButton={handleAtrasClick}
            />
            <ButtonForm
              typeButton="submit"
              classButton="btn btn-primary"
              text="Siguiente"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrdenTrabajo;
