import { WithRouterProps, withRouter } from "./WithRouterHoc";

interface LocationComponentProps {
  location: string;
}
type Props = LocationComponentProps & WithRouterProps;
const LocationComponent: React.FC<Props> = () => {
  switch (location.pathname) {
    case "/home":
      return <h1>Current page: Home</h1>;
    case "/about":
      return <h1>Current page: About us</h1>;
    default:
      return <h1>Current page: Oooops</h1>;
  }
};
const RouterLocation = withRouter(LocationComponent);
export default RouterLocation;
