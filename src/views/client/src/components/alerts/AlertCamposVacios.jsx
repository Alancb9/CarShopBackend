import React from 'react';

//Componente de alerta reutilizable, sirve para mostrar un mensaje de alerta cuando el usuario no llena un campo
const AlertaCamposVacios = ({ camposInvalidos }) => {
    return (
        camposInvalidos.length > 0 && (
            <div className="alert alert-danger" role="alert">
                Los campos en rojo son obligatorios.
            </div>
        )
    );
};

export default AlertaCamposVacios;
