import { useState } from 'react';
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { AuthProvider } from "./state/authState";
import { useAuth } from "./state/useAuth";
import "./styles.css";

function AppContent() {
  const { isAuthenticated } = useAuth();
  const [showRegister, setShowRegister] = useState(false);

  if (!isAuthenticated) {
    return showRegister ? (
      <Register onSwitchToLogin={() => setShowRegister(false)} />
    ) : (
      <Login onSwitchToRegister={() => setShowRegister(true)} />
    );
  }

  return (
    <div className="container">
      <div className="app-header">
        <h1>React Practice - Bài 9: Auth + API + Token</h1>
        <Profile />
      </div>
      
      {/* Các bài trước: Cart, UserList, ProductList - tạm đóng */}
      {/* <UserList /> 
      <div className="products-section">
        <ProductList />
        <Cart />
      </div> */}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;