import { useNavigate } from "react-router-dom";
import AppContext from "./AppContext";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.tracker.loggedIn);

  const changeDir = (path) => {
    if (isLoggedIn) navigate(path);
    else navigate("/login");
  };

  const value = {
    changeDir,
    isLoggedIn,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;
