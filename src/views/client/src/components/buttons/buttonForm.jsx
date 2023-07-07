import React from 'react';
//Componente reutilizable button, tanto para el boton de atras, siguiente, aprobar orden y nueva cita
const ButtonForm = ({classButton, typeButton, text, onClickButton}) => {
    return (
        <>

            {typeButton === 'button' ? (
                <button className = {classButton} type = {typeButton} onClick = {onClickButton}>{text}</button>
            ) : (
                <button type = {typeButton} className = {classButton}>{text}</button>
            )}


        </>


    );

}

export default ButtonForm;