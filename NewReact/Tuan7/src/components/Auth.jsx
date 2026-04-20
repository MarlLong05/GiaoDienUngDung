import { useRecoilState } from "recoil";
import { authState } from "../authState";

function Auth() {
  const [user, setUser] = useRecoilState(authState);

  const handleLogin = () => {
    setUser({ username: "23723141 Nguyễn Thành Long" });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <p>Xin chào: {user.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default Auth;