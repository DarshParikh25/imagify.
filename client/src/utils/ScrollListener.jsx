import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setScrolled } from "../slice/uiSlice";

const ScrollListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setScrolled(window.scrollY > 10));
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);
  return null;
};

export default ScrollListener;
