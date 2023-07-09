import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { getDataRequest } from "../api/dataEntry.js";

const CitasAgendadas = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const respuesta = await getDataRequest();
      setDatos(respuesta.data);
    };
    fetchData();
  }, []);

  // const getData = async () => {
  //   const respuesta = await getDataRequest();
  //   return respuesta 
  // };


  const handleSelectAllChange = (event) => {
    setSelectAll(event.target.checked);
  };
  return (
    <div className="me-5 pe-5 h-100">
      <table className="table table-striped table-bordered mx-5 mt-5">
        <thead>
          <tr>
            <th className="checkbox-column">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAllChange}
              />
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
          {datos.map((item, index) => (
            <tr key={index}>
              <td className="checkbox-column">
                <input type="checkbox" checked={selectAll} />
              </td>
              <td className="text-center">{item.client}</td>
              <td className="text-center">{item.carModel}</td>
              <td className="text-center">{item.orderDate}</td>
              <td className="text-center">Enviada</td>
            </tr>
          ))}

          {/* Agrega más filas según tus datos */}
        </tbody>
      </table>
    </div>
  );
};

export default CitasAgendadas;
