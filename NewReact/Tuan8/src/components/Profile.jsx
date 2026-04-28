import { useAuth } from '../state/useAuth';
import './Auth.css';

export default function Profile() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    // Parent component sẽ re-render và show login form
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Hồ Sơ Người Dùng</h2>
        
        <div className="profile-info">
          <div className="info-item">
            <label>ID:</label>
            <span>{user?.id}</span>
          </div>
          <div className="info-item">
            <label>Username:</label>
            <span>{user?.username}</span>
          </div>
          <div className="info-item">
            <label>Name:</label>
            <span>{user?.name}</span>
          </div>
          <div className="info-item">
            <label>Email:</label>
            <span>{user?.email}</span>
          </div>
        </div>

        <button onClick={handleLogout} className="btn-logout">
          Đăng Xuất
        </button>
      </div>
    </div>
  );
}
