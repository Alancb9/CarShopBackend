import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

function ButtonCitas() {
  const history = useNavigate();
  const handleVerPedidosClick = () => {
    history("/citasAgendadas"); // Redirigir al usuario a "/citasAgendadas"
  };

  return (
    <button
      className="ms-3 no-background-button"
      onClick={handleVerPedidosClick}
    >
      Ver pedidos
    </button>
  );
}

export default ButtonCitas;
