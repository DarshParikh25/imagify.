import { useSelector } from "react-redux";
import NavLinks from "../components/gallery/NavLinks";
import SearchBar from "../components/gallery/SearchBar";
import { Outlet } from "react-router-dom";

const Gallery = () => {
  const isDark = useSelector((state) => state.ui.isDark);

  return (
    <div
      className={`flex relative min-h-screen font-secondary ${
        isDark ? "bg-[#111]" : "bg-white"
      } transition-all duration-500`}
    >
      <nav id="left" className="fixed top-0 w-[20%]">
        <NavLinks />
      </nav>
      <div id="right" className="w-[80%] h-screen absolute right-0">
        <SearchBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Gallery;
