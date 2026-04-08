import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products"
import ProductDetail from "./components/ProductDetail"
import Dashboard from "./components/Dashboard"
import DashboardProfile from "./components/DashboardProfile"
import Orders from "./components/Orders"
import Settings from "./components/Settings"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />  

        <Route path="/dashboard" element={<Dashboard />}>
      <Route path="profile" element={<DashboardProfile />} />
      <Route path="orders" element={<Orders />} />
      <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
  );
}