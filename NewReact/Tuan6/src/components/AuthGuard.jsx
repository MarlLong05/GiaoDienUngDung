import { Navigate } from "react-router-dom";

function AuthGuard({ children }) {
  const isAuth = localStorage.getItem("user");

  return isAuth ? children : <Navigate to="/login" />;
}

export default AuthGuard;