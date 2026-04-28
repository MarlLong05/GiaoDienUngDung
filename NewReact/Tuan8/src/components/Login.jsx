import { useState } from 'react';
import { useAuth } from '../state/useAuth';
import './Auth.css';

export default function Login({ onSwitchToRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      // Sau khi login thành công, parent component sẽ re-render và show Profile
    } catch {
      // Error đã được set trong auth state
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Đăng Nhập</h2>
        
        {error && <div className="auth-error">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập username"
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập password"
              disabled={isLoading}
            />
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
          </button>
        </form>

        <p className="auth-switch">
          Chưa có tài khoản?{' '}
          <button type="button" onClick={onSwitchToRegister} className="link-btn">
            Đăng ký
          </button>
        </p>
      </div>
    </div>
  );
}
