import axios from "axios"; //Libreria que maneja peticiones fetch

const API = "http://localhost:3001/api";

export const registeRequest = (user) => axios.post(`${API}/register`, user);
