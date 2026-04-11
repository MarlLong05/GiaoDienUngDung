import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("user", "true");
    navigate("/profile");
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}

export default Login;