import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.css';
import TituloForm from '../components/titles/TituloForm.jsx';
import LabelForm from '../components/labels/LabelForm.jsx';
import AlertaCamposVacios from '../components/alerts/AlertCamposVacios.jsx';
import InputForm from '../components/inputs/InputForm.jsx';
import ButtonForm from './buttons/buttonForm';


const FormCliente = () => {

  //Use Context y State
  const { state, dispatch } = useContext(AppContext);
  const [cliente, setCliente] = useState(state.cliente);
  const [camposInvalidos1, setCamposInvalidos] = useState([]);
  const history = useNavigate();



  const handleInputChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validacion
    const camposRequeridos = ['nombre', 'email', 'contacto', 'tipoIdentificacion', 'identificacion'];
    const camposInvalidos = camposRequeridos.filter((campo) => cliente[campo] === '');
    if (camposInvalidos.length > 0) {
      setCamposInvalidos(camposInvalidos);
      return;
    };

    dispatch({ type: 'SET_CLIENTE', payload: cliente });  //Seteamos la informacion del Cliente en initialState
    history('/vehiculo'); //Regresar a form de vehiculo
  };

  return (
    <div className = {`container my-4`}>
      <TituloForm className = {'text-center'} text='Datos del cliente' />

      <div className = "form-container">

        {/* Formulario para ingreso de datos del cliente utilizando componentes reutilizables */}
        <form onSubmit ={handleSubmit} className = {`form-cliente`}>

          {/* Mensaje de alerta para campos vacios */}
          <AlertaCamposVacios camposInvalidos={camposInvalidos1} />

          <div className = 'row mt-3'>
            <div className = 'col-md-12'>
              <InputForm
                classDiv = 'form-group'
                typeLabel = 'nombre'
                text = 'Nombre del cliente:'
                placeholder = 'Nombres y Apellidos'
                type = 'text'
                name = 'nombre'
                value = {cliente.nombre}
                onChange = {handleInputChange}
                claseLabel = ''
                camposInvalidos = {camposInvalidos1}
              />
            </div>
          </div>

          <div className = 'row mt-3'>
            <div className = 'col-md-6'>
              <InputForm
                classDiv = 'form-group'
                typeLabel = 'email'
                text = 'Correo electrónico:'
                placeholder = 'Ejm: xxxx@xxxx.com'
                type = 'email'
                name = 'email'
                value = {cliente.email}
                onChange = {handleInputChange}
                claseLabel = ''
                camposInvalidos = {camposInvalidos1}
              />

            </div>
            <div className = 'col-md-6'>
              <InputForm
                classDiv = 'form-group'
                typeLabel = 'contacto'
                text = 'Número de contacto:'
                placeholder = 'Teléfono fijo o movil'
                type = 'text'
                name = 'contacto'
                value = {cliente.contacto}
                onChange = {handleInputChange}
                claseLabel = ''
                camposInvalidos = {camposInvalidos1}
              />

            </div>
          </div>

          <div className = 'row mt-3'>
            <div className = 'col-md-6'>
              <div className = 'form-group'>
                <LabelForm tipo = {'tipoIdentificacion'} text = {'Tipo de identificación:'} />
                <select

                  name = 'tipoIdentificacion'
                  value = {cliente.tipoIdentificacion}
                  onChange = {handleInputChange}
                  className = {`form-control ${camposInvalidos1.includes('tipoIdentificacion') ? 'is-invalid' : ''}`}
                >
                  <option selected value = ''>Escoja una de las opciones</option>
                  <option value = 'Cédula'>Cédula</option>
                  <option value = 'Ruc'>RUC</option>
                  <option value = 'Pasaporte'>Pasaporte</option>
                </select>
              </div>
            </div>
            <div className = 'col-md-6'>
              <InputForm
                classDiv = 'form-group'
                typeLabel = 'identificacion'
                text = 'Numero de identificación:'
                placeholder = 'Identificación'
                type = 'text'
                name = 'identificacion'
                value = {cliente.identificacion}
                onChange = {handleInputChange}
                claseLabel = ''
                camposInvalidos = {camposInvalidos1}
              />
            </div>
          </div>

          <div className = 'd-md-flex justify-content-md-end mt-4 mb-5'>
            <ButtonForm typeButton = 'submit' classButton = 'btn btn-primary' text = 'Siguiente' />
          </div>
        </form>
      </div>
    </div>



  );
};

export default FormCliente;
