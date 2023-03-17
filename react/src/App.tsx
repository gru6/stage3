import "./App.css";
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Homepage";
import ErrorPage from "./pages/Errorpage";
import About from "./pages/Aboutpage";

function App() {
  return (
    <>
      <header className="header">
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/about`}>About Us</NavLink>
      </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
