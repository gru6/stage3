import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./pages/Homepage";
import ErrorPage from "./pages/Errorpage";
import About from "./pages/Aboutpage";
import RouterLocation from "./components/location";
import FormPage from "./pages/FormPage";

/* interface AppProps {
  url: string;
} */

export class App extends React.Component /* <AppProps> */ {
  render() {
    return (
      <Router>
        <header className="header">
          <NavLink to={`/`}>Home</NavLink>
          <NavLink to={`/form`}>Form</NavLink>
          <NavLink to={`/about`}>About Us</NavLink>
          <Route>
            <RouterLocation />
          </Route>
        </header>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/form" element={<FormPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    );
  }
}
