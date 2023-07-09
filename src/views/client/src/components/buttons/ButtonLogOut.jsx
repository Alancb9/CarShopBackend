import React from 'react';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useA } from '../../context/AppContext';

const ButtonLogOut = () => {
    const navigate = useNavigate();
    const { setIsAuthenticated } = useA();
    const handleIconUserClick = () => {
        
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';//Borrar cookie
        setIsAuthenticated(false); // Cambiar estado de autenticación a falso
        navigate('/'); //Redireccionar a la pagina principal
    };

    return(
        <button id = 'iconoUser' className = 'ms-3' onClick={handleIconUserClick}>
            <span id = 'iconoMO'><FontAwesomeIcon icon={faRightFromBracket} beat size="xl" style={{color: "#ffffff",}} /></span>
        </button>
    );
};

export default ButtonLogOut;