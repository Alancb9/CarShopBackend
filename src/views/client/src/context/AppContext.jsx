import React, { createContext, useReducer } from 'react';
import { reducer } from './reducers.jsx';

//Coleccion en donde se guardaran los datos de los formularios
const initialState = {
  cliente: {
    nombre: '',
    email: '',
    contacto: '',
    tipoIdentificacion: '',
    identificacion: '',
  },
  vehiculo: {
    marca: '',
    modelo: '',
    placa: '',
    nivelTanque: '',
    estadoExterior: '',
  },
  servicios: [],
  fechaEntrega: '',
};
//uso del children
export const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value = {{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
