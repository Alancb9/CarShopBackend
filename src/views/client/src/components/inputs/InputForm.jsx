import React from 'react';
import LabelForm from '../labels/LabelForm.jsx';

//Componente reutilizable input, que combina el label y el input sirve tanto para chexbox como para datos para escritura
const InputForm = ({ typeLabel, text, placeholder, type, name, value, checked, onChange, camposInvalidos, claseLabel, classDiv, idCB, classCheckbox }) => {
    return (
        <div className = {classDiv}>
            <LabelForm className = {claseLabel} tipo = {typeLabel} text = {text} />
            {type === 'checkbox' ? (
                <input
                    className = {classCheckbox}
                    type = {type}
                    value = {value}
                    id = {idCB}
                    checked = {checked}
                    onChange = {onChange}
                    
                />
            ) : (
                <input
                    type = {type}
                    name = {name}
                    value = {value}
                    onChange = {onChange}
                    placeholder = {placeholder}
                    className = {`form-control ${camposInvalidos.includes(name) ? 'is-invalid' : ''}`}
                />
            )}
        </div>
    );
};

export default InputForm;
