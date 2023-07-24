import { useA } from "./context/AppContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  
  const { loading, isAuthenticated } = useA();
  console.log(loading, isAuthenticated);
  //Si esta cargando la pagina
  //Si no esta cargando la pagina y no esta autenticado
  if (!loading && !isAuthenticated) {
    return <Navigate to="/login" replace />; //Redirige a la pagina de login
  }
  return <Outlet />;
}

export default ProtectedRoutes;
