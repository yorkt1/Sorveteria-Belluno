import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom"; // Updated import for v6

import Home from "../Pages/Home/Home.jsx";
import Sobre from "../Pages/Sobre/Sobre.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* In React Router v6, the "element" prop is used instead of "component" */}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
