import "./App.css";
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Homepage";
import ErrorPage from "./pages/Errorpage";
import About from "./pages/Aboutpage";

class App extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <NavLink to={`/`}>Home</NavLink>
          <NavLink to={`/about`}>About Us</NavLink>
          <this.Locations />
        </header>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </>
    );
  }
  Locations() {
    if (window.location.href.slice(-6) === "/about") {
      return (
        <>
          <h1>Current page: About us</h1>;
        </>
      );
    } else
      return (
        <>
          <h1>Current page: Home</h1>
        </>
      );
  }
}

export default App;
