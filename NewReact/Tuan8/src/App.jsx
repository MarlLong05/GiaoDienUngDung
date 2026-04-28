import { useState } from 'react';
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import ProductListComponent from "./components/ProductListComponent";
import LoadingOverlay from "./components/LoadingOverlay";
import ErrorDisplay from "./components/ErrorDisplay";
import NotificationContainer from "./components/NotificationContainer";
import { AuthProvider } from "./state/authState";
import { useAuth } from "./state/useAuth";
import { ProductProvider } from "./state/productState";
import { CartProvider } from "./state/cartState";
import { UIProvider } from "./state/uiState";
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
    <ProductProvider>
      <CartProvider>
        <div className="container">
          <div className="app-header">
            <h1>React Practice - Bài 10: Mini App (Tổng Hợp)</h1>
            <Profile />
          </div>
          
          <ProductListComponent />
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <UIProvider>
        <LoadingOverlay />
        <ErrorDisplay />
        <NotificationContainer />
        <AppContent />
      </UIProvider>
    </AuthProvider>
  );
}

export default App;