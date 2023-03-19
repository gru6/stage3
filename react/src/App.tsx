import "./App.css";
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Homepage";
import ErrorPage from "./pages/Errorpage";
import About from "./pages/Aboutpage";
import RouterLocation from "./components/location";

export class App extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <NavLink to={`/home`}>Home</NavLink>
          <NavLink to={`/about`}>About Us</NavLink>
          <RouterLocation />
        </header>

        <Routes>
          <Route path="/home" element={<Home />}></Route>
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
          <h1>Current page: About us {location.pathname}</h1>
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
