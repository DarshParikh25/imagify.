import NavLinks from "../components/NavLinks";
import SearchBar from "../components/SearchBar";
import { Outlet } from "react-router-dom";

const Gallery = () => {
  return (
    <div className={`flex relative`}>
      <div id="left" className="fixed top-0 w-[20%]">
        <NavLinks />
      </div>
      <div id="non-left" className="w-[80%] h-screen absolute right-0">
        <SearchBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Gallery;
