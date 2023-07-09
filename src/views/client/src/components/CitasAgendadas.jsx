import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";

const CitasAgendadas = () => {
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAllChange = (event) => {
    setSelectAll(event.target.checked);
  };
  return (
    <div className="me-5 pe-5 h-100">
      <table className="table table-striped table-bordered mx-5 mt-5">
        <thead>
          <tr>
            <th className="checkbox-column">
              <input type="checkbox" checked={selectAll}
                onChange={handleSelectAllChange}/>
            </th>
            <th scope="col" className="text-center">
              Nombre del cliente
            </th>
            <th scope="col" className="text-center">
              Nombre del vehículo
            </th>
            <th scope="col" className="text-center">
              Fecha de entrega
            </th>
            <th scope="col" className="text-center">
              Estado de la orden
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Aquí puedes agregar las filas de datos de tu tabla */}
          <tr>
            <td className="checkbox-column">
              <input type="checkbox" checked={selectAll}/>
            </td>
            <td className="text-center">Nombre del cliente 1</td>
            <td className="text-center">Nombre del vehículo 1</td>
            <td className="text-center">Fecha de entrega 1</td>
            <td className="text-center">Enviada</td>
          </tr>
          <tr>
            <td className="checkbox-column">
              <input type="checkbox" checked={selectAll}/>
            </td>
            <td className="text-center">Nombre del cliente 2</td>
            <td className="text-center">Nombre del vehículo 2</td>
            <td className="text-center"> Fecha de entrega 2</td>
            <td className="text-center">Enviada</td>
          </tr>
          {/* Agrega más filas según tus datos */}
        </tbody>
      </table>
    </div>
  );
};

export default CitasAgendadas;
