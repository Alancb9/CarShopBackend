import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.css';
import TituloForm from '../components/titles/TituloForm.jsx';
import InputForm from '../components/inputs/InputForm.jsx';
import ButtonForm from './buttons/buttonForm';

const Servicios = () => {
  const { state, dispatch } = useContext(AppContext);
  const history = useNavigate();
  const [error, setError] = useState(false);

  const handleCheckboxChange = (e) => {
    const selectedService = e.target.value;

    if (e.target.checked) {
      dispatch({ type: 'ADD_SERVICIO', payload: selectedService }); //Agregamos los servicios cuando de clic en siguiente
    } else {
      dispatch({ type: 'REMOVE_SERVICIO', payload: selectedService });  //Removemos el servicio en caso de que desmarque una casilla
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.servicios.length === 0) {
      setError(true);
      return;
    }
    history('/orden');  // Ir a form de orden
  };

  const handleAtrasClick = () => {
    history('/vehiculo'); //Ir a form de vehiculo
  };

  return (

    // Ingreso de servicios
    <div className = 'container my-4'>
      <TituloForm className  ={'text-center'} text = 'Selección de servicios' />



      <div className = 'form-container'>

        {/* Formulario para seleccion multiple de servicios */}
        <form onSubmit = {handleSubmit} className = 'form-cliente'>

          {/* Mensaje de alerta para campos vacios */}
          {error && (
            <div className = 'alert alert-danger' role = 'alert'>
              Debes elegir al menos uno de los campos
            </div>
          )}
          
          <InputForm
            classDiv = 'form-check'
            claseLabel = 'form-check-label'
            typeLabel = 'Cambio de aceite'
            text = 'Cambio de aceite'
            classCheckbox = 'form-check-input'
            type = 'checkbox'
            value = 'Cambio de aceite'
            idCB = 'Cambio de aceite'
            onChange = {handleCheckboxChange}
            checked = {state.servicios.includes('Cambio de aceite')}
          />

          <InputForm
            classDiv = 'form-check'
            claseLabel = 'form-check-label'
            typeLabel = 'Cambio de frenos'
            text = 'Cambio de frenos'
            classCheckbox = 'form-check-input'
            type = 'checkbox'
            value = 'Cambio de frenos'
            idCB = 'Cambio de frenos'
            onChange = {handleCheckboxChange}
            checked = {state.servicios.includes('Cambio de frenos')}
          />

          <InputForm
            classDiv = 'form-check'
            claseLabel = 'form-check-label'
            typeLabel = 'Alineacion y balanceo'
            text = 'Alineacion y balanceo'
            classCheckbox = 'form-check-input'
            type = 'checkbox'
            value = 'Alineacion y balanceo'
            idCB = 'Alineacion y balanceo'
            onChange = {handleCheckboxChange}
            checked = {state.servicios.includes('Alineacion y balanceo')}
          />

          <InputForm
            classDiv = 'form-check'
            claseLabel = 'form-check-label'
            typeLabel = 'Diagnostico General'
            text = 'Diagnostico General'
            classCheckbox = 'form-check-input'
            type = 'checkbox'
            value = 'Diagnostico General'
            idCB = 'Diagnostico General'
            onChange = {handleCheckboxChange}
            checked = {state.servicios.includes('Diagnostico General')}
          />

          <InputForm
            classDiv = 'form-check'
            claseLabel = 'form-check-label'
            typeLabel = 'Revision del sistema electrico'
            text = 'Revision del sistema electrico'
            classCheckbox = 'form-check-input'
            type = 'checkbox'
            value = 'Revision del sistema electrico'
            idCB = 'Revision del sistema electrico'
            onChange = {handleCheckboxChange}
            checked = {state.servicios.includes('Revision del sistema electrico')}
          />

          <InputForm
            classDiv = 'form-check'
            claseLabel = 'form-check-label'
            typeLabel = 'Reparacion de neumaticos'
            text = 'Reparacion de neumaticos'
            classCheckbox = 'form-check-input'
            type = 'checkbox'
            value = 'Reparacion de neumaticos'
            idCB = 'Reparacion de neumaticos'
            onChange = {handleCheckboxChange}
            checked = {state.servicios.includes('Reparacion de neumaticos')}
          />

          <InputForm
            classDiv = 'form-check'
            claseLabel = 'form-check-label'
            typeLabel = 'Mantenimiento del sistema de aire acondicionado'
            text = 'Mantenimiento del sistema de aire acondicionado'
            classCheckbox = 'form-check-input'
            type = 'checkbox'
            value = 'Mantenimiento del sistema de aire acondicionado'
            idCB = 'Mantenimiento del sistema de aire acondicionado'
            onChange = {handleCheckboxChange}
            checked = {state.servicios.includes("Mantenimiento del sistema de aire acondicionado")}
          />

          <div className = 'd-md-flex justify-content-md-end mt-4 mb-1'>
            <ButtonForm typeButton = 'button' classButton = 'btn btn-primary me-md-2' text = 'Atrás' onClickButton = {handleAtrasClick}/>
            <ButtonForm typeButton = 'submit' classButton = 'btn btn-primary' text = 'Siguiente'/>
          </div>

        </form >
        
      </div >

    </div >
  );
};

export default Servicios;

