import { useContext } from "react";
import AppContext from "../context/AppContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AppContext);

  return !isLoggedIn ? <Navigate to={"/login"} replace /> : children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
