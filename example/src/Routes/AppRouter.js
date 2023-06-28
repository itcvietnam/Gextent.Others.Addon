import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";

function AppRouter() {
  return (
    <Router basename="/Others/Others/React/Gextent.Others.Addon-main/Gextent.Others.Addon-main/example/build">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;