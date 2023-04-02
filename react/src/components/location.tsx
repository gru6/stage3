import { useLocation } from "react-router-dom";
import React from "react";

interface LocationComponentProps {
  location: string;
}
type PropsLocation = LocationComponentProps;
const LocationComponent: React.FC<PropsLocation> = ({ location }) => {
  switch (location) {
    case "/":
      return <h1>Current page: Home</h1>;
    case "/form":
      return <h1>Current page: Form</h1>;
    case "/about":
      return <h1>Current page: About us</h1>;
    default:
      return <h1>Current page: Oooops</h1>;
  }
};

const RouterLocation = () => {
  const location = useLocation().pathname;
  return <LocationComponent location={location} />;
};

export default RouterLocation;
