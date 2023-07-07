import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonUser = ({presentacion}) => {
    const navigate = useNavigate();
    
    const handleIconUserClick = () => {
        presentacion(false); 
        navigate('/login');
    };

    return(
        <button id = 'iconoUser' className = 'ms-3' onClick={handleIconUserClick}>
            <span id = 'iconoMO'><FontAwesomeIcon icon={faUser} beat size="xl" style={{color: "#ffffff",}} /></span>
        </button>
    );
};

export default ButtonUser;