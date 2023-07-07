import React from 'react'

// Componente reutilizable que muestra el titulo del formulario mediante una etiqueta h2
const TituloForm = ({ className, text }) => {
    return(
        <h2 className = {className}>
            {text}
        </h2>
    );
};

export default TituloForm;