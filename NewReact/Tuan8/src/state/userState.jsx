import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    data: [],
    loading: false,
    error: null,
  });

  const fetchUsers = async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Failed to fetch users');
      
      const users = await res.json();
      
      setState({
        data: users,
        loading: false,
        error: null,
      });
    } catch (err) {
      setState({
        data: [],
        loading: false,
        error: err.message || 'Đã xảy ra lỗi khi tải dữ liệu',
      });
    }
  };

  // Fetch dữ liệu khi component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ ...state, fetchUsers }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook an toàn hơn
export const useUsers = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUsers must be used within a UserProvider');
  }

  return context;
};