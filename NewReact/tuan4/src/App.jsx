import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ProductLists from "./components/ProductLists";
import ProductDetail from "./components/ProductDetail";

import MainLayout from "./components/MainLayout";
import User from "./components/User";
import Guest from "./components/Guest";
import Product from "./components/Product";
import "./App.css";

import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";


function App() {
  return (
    // <div>
    //   <nav>
    //     <Link to="/">Home</Link>
    //     <Link to="/products">Products</Link>
    //   </nav>

    //   <div className="container">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/products" element={<ProductLists />} />
    //       <Route path="/products/:id" element={<ProductDetail />} />
    //     </Routes>
    //   </div>
    // </div>

    //  <Routes>
    //   <Route path="/" element={<MainLayout />}>
    //     <Route path="user" element={<User />} />
    //     <Route path="guest" element={<Guest />} />
    //     <Route path="product" element={<Product />} />
    //   </Route>
    // </Routes>


    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="blogs" element={<BlogList />} />
        <Route path="blogs/:id" element={<BlogDetail />} />
      </Route>
    </Routes>


  );
}

export default App;