import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollHandler = ({ offsets }) => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const offset = offsets[id] ?? 0;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }
  }, [hash, offsets]);
  return null;
};

ScrollHandler.propTypes = {
  offsets: PropTypes.object,
};

export default ScrollHandler;
