import React, { createContext, useReducer, useState, useContext } from "react";
import { reducer } from "./reducers.jsx";
import { registerRequest } from "../api/auth.js";

//Coleccion en donde se guardaran los datos de los formularios
const initialState = {
  cliente: {
    nombre: "",
    email: "",
    contacto: "",
    tipoIdentificacion: "",
    identificacion: "",
  },
  vehiculo: {
    marca: "",
    modelo: "",
    placa: "",
    nivelTanque: "",
    estadoExterior: "",
  },
  servicios: [],
  fechaEntrega: "",
};
//uso del contexto
export const AppContext = createContext();

//hook para evitar andar importando el contexto
export const useA = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("no context :c"); //Si no encuentra el contexto lanza un error
  }
  return context;
};

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //Verificar autenticacion mediante el uso del estado
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //Verificar errores mediante el uso del estado
  const[errors, setErrors] = useState([]);


  // Registro de usuario para posterior uso de componentes
  const signup = async (datos) => {
    try {
      const respuesta = await registerRequest(datos);
      console.log(respuesta);
      setUser(respuesta.data);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch, signup, user, isAuthenticated, errors }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
