import axios from "axios";

const instancia = axios.create({
  // baseURL: "http://localhost:3001/api",
  baseURL: "http://192.168.100.4:3001/api",
  withCredentials: true,
});

export default instancia;
