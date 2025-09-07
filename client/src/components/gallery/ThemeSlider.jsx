import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsDark } from "../../slice/uiSlice";

const ThemeSlider = () => {
  const [animate, setAnimate] = useState("");

  const dispatch = useDispatch();

  const isDark = useSelector((state) => state.ui.isDark);
  const handleTheme = () => {
    dispatch(setIsDark());
    setAnimate(
      animate === "animate-light-to-dark"
        ? "animate-dark-to-light"
        : "animate-light-to-dark"
    );
  };

  return (
    <div
      onClick={handleTheme}
      className="w-[7%] flex items-center border-2 border-[#a9a9a9] rounded-full p-1 bg-transparent cursor-pointer"
    >
      <div
        className={`w-7 h-7 rounded-full flex justify-center items-center ${
          !isDark ? "bg-[#a9a9a9]" : "bg-white"
        } ${animate}`}
      >
        <img
          src="/light-mode.png"
          alt=""
          className={`${isDark ? "hidden" : "flex"}`}
        />
        <img
          src="/night-mode.png"
          alt=""
          className={`${!isDark ? "hidden" : "flex"}`}
        />
      </div>
    </div>
  );
};

export default ThemeSlider;
