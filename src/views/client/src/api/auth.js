// import axios from "axios"; //Libreria que maneja peticiones fetch
import axios from'./axios'; 

// const API = "http://localhost:3001/api";

export const registerRequest = (user) => axios.post(`/register`, user);


export const loginRequest = (user) => axios.post(`/login`, user);

export const tokenRequest = () => axios.get('/verify-token');