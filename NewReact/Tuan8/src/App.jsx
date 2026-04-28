import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import UserList from "./components/UserList";
import { UserProvider } from "./state/userState";
import "./styles.css";

function App() {
  return (
    <UserProvider>
      <div className="container">
        <h1>React Practice - Bài 7</h1>
        
        <UserList />
        
        {/* <div className="products-section">
          <ProductList />
          <Cart />
        </div> */}
      </div>
    </UserProvider>
  );
}

export default App;