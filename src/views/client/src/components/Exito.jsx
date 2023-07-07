import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.css';
import TituloForm from '../components/titles/TituloForm.jsx';
import ButtonForm from './buttons/buttonForm';
import ParagraphsForm from './paragraphs/paragraphsForm.jsx';

const Exito = () => {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleReservarOtraCita = () => {
    dispatch({ type: 'RESET_DATOS' });  //Reseteamos datos una vez da click en reservar nueva cita

    navigate('/cliente'); // Redirigir al inicio para reservar otra cita
  };

  //Formulario que muestra un mensaje de reserva exitosa que incluye un boton para agendar una nueva cita
  return (
    <div className="container">

      <form onSubmit = {handleReservarOtraCita} className = 'form-cliente py-5'>
        <TituloForm className = {'text-center my-5'} text = 'Cita reservada exitosamente' />
        <ParagraphsForm classParagraph = 'text-center my-3' textparagraph = 'Felicidades, tu cita ha sido reservada correctamente.' />
        <div className = 'd-md-flex justify-content-md-center my-5'>
          <ButtonForm typeButton = 'submit' classButton = 'btn btn-primary' text = 'Reservar otra cita' />
        </div>
      </form>

    </div>
  );
};

export default Exito;