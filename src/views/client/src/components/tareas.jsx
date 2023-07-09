import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useA } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.css';
import TituloForm from '../components/titles/TituloForm.jsx';
import ButtonForm from './buttons/buttonForm';

function Tareas() {

  const { isAuthenticated } = useA();
  const navigate = useNavigate();

  const handleReservarOtraCita = () => {
    if (isAuthenticated){
      navigate('/cliente'); // Redirigir al form de cliente para iniciar registro de vehiculo
    }

    
  };

  return (
    <div className="container">

      <form onSubmit = {handleReservarOtraCita} className = 'form-cliente py-5'>
        <TituloForm className = {'text-center my-5'} text = 'Iniciar Registro' />
        <div className = 'd-md-flex justify-content-md-center my-5'>
          <ButtonForm typeButton = 'submit' classButton = 'btn btn-primary' text = 'Iniciar Registro del vehiculo' />
        </div>
      </form>

    </div>
  );
}

export default Tareas;
