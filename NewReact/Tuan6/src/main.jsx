import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./index.css";
import ShopApp from "./ShopApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* redirect từ / → /shop */}
        <Route path="/" element={<Navigate to="/shop" />} />

        {/* Shop */}
        <Route path="/shop/*" element={<ShopApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);