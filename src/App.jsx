import NavLinks from "./components/NavLinks";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { darkThemeContext, photosContext } from "./context/ContextAPI";
import { Outlet } from "react-router-dom";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [photos, setPhotos] = useState([])

  return (
    <darkThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <photosContext.Provider value={{photos, setPhotos}}>
        <div className={`flex relative`}>
          <div id="left" className="fixed top-0 w-[20%]"> 
            <NavLinks />
          </div>
          <div id="non-left" className="w-[80%] h-screen absolute right-0">
            <Navbar />
            <Outlet />
          </div>
        </div>
      </photosContext.Provider>
    </darkThemeContext.Provider>
  );
}

export default App;