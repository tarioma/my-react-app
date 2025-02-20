import {Navigate} from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
    const isAuthenticated = false;

    return isAuthenticated ? <Component /> : <Navigate to="/" replace />;
}

export default PrivateRoute;