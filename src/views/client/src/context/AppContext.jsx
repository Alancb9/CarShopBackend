import React, {
  createContext,
  useReducer,
  useState,
  useContext,
  useEffect,
} from "react";
import { reducer } from "./reducers.jsx";
import { registerRequest, loginRequest, tokenRequest } from "../api/auth.js";
import Cookies from "js-cookie";

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
  const [errors, setErrors] = useState([]);

  //Verificar si se esta cargando la pagina mediante el uso del estado
  const [loading, setLoading] = useState(true);

  // Registro de usuario para posterior uso de componentes, validaciones y errores
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

  const signin = async (user) => {
    try {
      const respuesta = await loginRequest(user);
      console.log(respuesta);
      setIsAuthenticated(true);
      setUser(respuesta.data);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      console.log(error.response.data);
      setErrors([error.response.data.message]);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    //funcion que se ejecuta cuando se carga la aplicacion
    async function checkLogin() {
      const cookies = Cookies.get();
      //Cuando cargue la aplicacion si cookie tiene el token hacer peticion al backend
      if (!cookies.token) {
        setIsAuthenticated(false); //No hay autenticacion
        setLoading(false); //No esta cargando nada
        return setUser(null); //No hay usuario
      }

      try {
        //Si el token es valido se obtiene la informacion del usuario
        const respuesta = await tokenRequest(cookies.token); //Verificar si el token es valido
        if (!respuesta.data) { //Si el backend no responde nada
          setIsAuthenticated(false); //Autenticacion es falsa
          setLoading(false); // No esta cargando nada
          return;
        }
        //En el caso de que el token sea valido
        setIsAuthenticated(true); //Autenticacion es verdadera
        setUser(respuesta.data); //Se obtiene la informacion del usuario
        setLoading(false); //termina de cargar
      } catch (error) { //En caso de que me de error
        console.log(error); //muestrame el error
        setIsAuthenticated(false); //Autenticacion es falsa
        setUser(null); //No hay usuario
        setLoading(false); //No esta cargando nada
      }
    }
    checkLogin();
  }, [isAuthenticated]);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{ state, dispatch, signup, signin, loading, user, isAuthenticated, errors, setIsAuthenticated, }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
