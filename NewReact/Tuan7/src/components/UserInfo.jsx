import { useRecoilValue } from "recoil";
import { authState } from "../authState";

function UserInfo() {
  const user = useRecoilValue(authState);

  return (
    <div>
      {user ? <h3>User: {user.username}</h3> : <h3>Chưa đăng nhập</h3>}
    </div>
  );
}

export default UserInfo;