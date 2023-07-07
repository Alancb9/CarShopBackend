import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import TituloForm from '../components/titles/TituloForm.jsx';
import LabelForm from '../components/labels/LabelForm.jsx';
import AlertaCamposVacios from '../components/alerts/AlertCamposVacios.jsx';
import InputForm from '../components/inputs/InputForm.jsx';
import ButtonForm from './buttons/buttonForm';

const FormVehiculo = () => {
  //Use Context y State
  const { state, dispatch } = useContext(AppContext);
  const [vehiculo, setVehiculo] = useState(state.vehiculo);
  const [camposInvalidos1, setCamposInvalidos] = useState([]);
  const history = useNavigate();

  const handleInputChange = (e) => {
    setVehiculo({
      ...vehiculo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion
    const camposRequeridos = ['marca', 'modelo', 'placa', 'nivelTanque', 'estadoExterior'];
    const camposInvalidos = camposRequeridos.filter((campo) => vehiculo[campo] === '');
    if (camposInvalidos.length > 0) {
      setCamposInvalidos(camposInvalidos);
      return;
    }


    dispatch({ type: 'SET_VEHICULO', payload: vehiculo });  //Seteamos la informacion del Vehiculo en initialState
    history('/servicios');  //Ir a form de servicios
  };

  const handleAtrasClick = () => {
    history('/cliente');//Ir a form de cliente
  };

  return (
    <div className="container my-4">
      <TituloForm className = {'text-center'} text='Datos del vehículo' />

      <div className = 'form-container'>

        {/* Formulario para ingresar los datos del vehiculos utilizando componentes reutilizables */}
        <form onSubmit = {handleSubmit} className = 'form-cliente'>

          {/* Mensaje de alerta para campos vacios */}
          <AlertaCamposVacios camposInvalidos={camposInvalidos1} />

          <div className = 'row mt-3'>
            <div className = 'col-md-12'>
              <InputForm
                classDiv = 'form-group'
                typeLabel = 'marca'
                text = 'Marca del vehículo:'
                placeholder = 'Ejm: Chevrolet, KIA, etc.'
                type = 'text'
                name = 'marca'
                value = {vehiculo.marca}
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
                typeLabel = 'modelo'
                text = 'Modelo:'
                placeholder = 'Ejm: Vitara, Tucson'
                type = 'text'
                name = 'modelo'
                value = {vehiculo.modelo}
                onChange = {handleInputChange}
                claseLabel = ''
                camposInvalidos = {camposInvalidos1}
              />
            </div>
            <div className = 'col-md-6'>
              <InputForm
                classDiv = 'form-group'
                typeLabel = 'placa'
                text = 'Placa:'
                placeholder = 'Ejm: XXXX-xxx'
                type = 'text'
                name = 'placa'
                value = {vehiculo.placa}
                onChange = {handleInputChange}
                claseLabel = ''
                camposInvalidos = {camposInvalidos1}
              />
            </div>
          </div>

          <div className = "row mt-3">
            <div className = "col-md-12">
              <InputForm
                classDiv = 'form-group'
                typeLabel = 'nivelTanque'
                text = 'Nivel del tanque de gasolina:'
                placeholder = 'Ejm: X%'
                type = 'text'
                name = 'nivelTanque'
                value = {vehiculo.nivelTanque}
                onChange = {handleInputChange}
                claseLabel = ''
                camposInvalidos = {camposInvalidos1}
              />
            </div>
          </div>

          <div className = 'row mt-3'>
            <div className = 'col-ms-12'>
              <div className = 'form-group'>
                <LabelForm tipo = {'estadoExterior'} text = {'Estado exterior del vehiculo:'} />
                <textarea
                  placeholder = 'Detallar abolladuras, rayones o cualquier dato relevante sobre el estado exterior del vehículo.'
                  name= 'estadoExterior'
                  value = {vehiculo.estadoExterior}
                  onChange = {handleInputChange}
                  className = {`form-control ${camposInvalidos1.includes('estadoExterior') ? 'is-invalid' : ''}`}
                ></textarea>
              </div>
            </div>
          </div>

          <div className = 'd-md-flex justify-content-md-end mt-4 mb-5'>
            <ButtonForm typeButton ='button' classButton = 'btn btn-primary me-md-2' text = 'Atrás' onClickButton = {handleAtrasClick}/>
            <ButtonForm typeButton = 'submit' classButton = 'btn btn-primary' text = 'Siguiente'/>
          </div>

        </form>
        
      </div>

    </div>
  );
};

export default FormVehiculo;
