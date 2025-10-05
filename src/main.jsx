import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ProductPage from "./pages/ProductPage";
import ARViewer from "./pages/ARViewer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/ar-viewer" element={<ARViewer />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
