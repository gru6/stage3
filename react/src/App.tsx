import "./App.css";
import React from "react";
/* import ReactDOM from "react-dom/client"; */
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/root";
import ErrorPage from "./pages/Errorpage";
import About from "./pages/Aboutpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
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
