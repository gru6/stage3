import "./App.css";
import React from "react";
/* import ReactDOM from "react-dom/client"; */
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./pages/Errorpage";
import About from "./pages/Aboutpage";
import Home from "./pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "home",
    element: <Home />,
  },
]);

/* ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
); */

function App() {
  return <RouterProvider router={router} />;
}

export default App;
