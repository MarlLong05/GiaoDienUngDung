import { useState, useCallback } from 'react';
import { AuthContext } from './context/AuthContext';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const AuthProvider = ({ children }) => {
  // Khởi tạo state từ localStorage
  const [auth, setAuth] = useState(() => {
    const storedToken = localStorage.getItem('auth_token');
    const storedUser = localStorage.getItem('auth_user');
    
    return {
      user: storedUser ? JSON.parse(storedUser) : null,
      token: storedToken,
      isLoading: false,
      error: null,
    };
  });

  // Login - Giả lập API call (JSONPlaceholder không có auth thực)
  const login = useCallback(async (username, password) => {
    setAuth(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Giả lập API call - thực tế sẽ gọi /login endpoint
      if (!username || !password) {
        throw new Error('Username và password không được để trống');
      }

      // Tạo mock token (thực tế nhận từ server)
      const mockToken = `token_${username}_${Date.now()}`;
      const mockUser = {
        id: Math.floor(Math.random() * 10) + 1,
        username,
        email: `${username}@example.com`,
        name: username.charAt(0).toUpperCase() + username.slice(1),
      };

      // Lưu vào localStorage
      localStorage.setItem('auth_token', mockToken);
      localStorage.setItem('auth_user', JSON.stringify(mockUser));

      setAuth({
        user: mockUser,
        token: mockToken,
        isLoading: false,
        error: null,
      });

      return { success: true, user: mockUser };
    } catch (err) {
      const errorMessage = err.message || 'Lỗi đăng nhập';
      setAuth(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      throw err;
    }
  }, []);

  // Register - Giả lập API call
  const register = useCallback(async (username, email, password) => {
    setAuth(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      if (!username || !email || !password) {
        throw new Error('Vui lòng điền đầy đủ thông tin');
      }

      // Giả lập API call
      const mockToken = `token_${username}_${Date.now()}`;
      const mockUser = {
        id: Math.floor(Math.random() * 10) + 1,
        username,
        email,
        name: username.charAt(0).toUpperCase() + username.slice(1),
      };

      // Lưu vào localStorage
      localStorage.setItem('auth_token', mockToken);
      localStorage.setItem('auth_user', JSON.stringify(mockUser));

      setAuth({
        user: mockUser,
        token: mockToken,
        isLoading: false,
        error: null,
      });

      return { success: true, user: mockUser };
    } catch (err) {
      const errorMessage = err.message || 'Lỗi đăng ký';
      setAuth(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      throw err;
    }
  }, []);

  // Logout
  const logout = useCallback(() => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    setAuth({
      user: null,
      token: null,
      isLoading: false,
      error: null,
    });
  }, []);

  const value = {
    user: auth.user,
    token: auth.token,
    isLoading: auth.isLoading,
    error: auth.error,
    isAuthenticated: !!auth.token,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
