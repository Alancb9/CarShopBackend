import React from 'react';

//Componente reutilizable Label, tanto para el form de eleccion multiple como para los formularios de relleno
const LabelForm = ({ className, tipo, text }) => {
  return (
    <>
      {className === 'form-check-label' ? (
        <label className = {className} htmlFor = {tipo}>
          {text}
        </label>
      ) : (
        <label htmlFor = {tipo}>{text}</label>
      )}
    </>
  );
};

export default LabelForm;
