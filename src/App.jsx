import NavLinks from "./components/NavLinks";
import ImageCard from "./components/ImageCard";
import Navbar from "./components/Navbar";
import { useRef, useEffect, useState } from "react";
import { darkThemeContext } from "./context/ContextAPI";

function App() {
  const imageContainer = useRef();

  const apiKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

  const [photos, setPhotos] = useState([])
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)
        setPhotos(data)
      });
  }, [apiKey]);

  return (
    <darkThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`flex relative`}>
        <div id="left" className="fixed top-0 w-[20%]"> 
          <NavLinks />
        </div>
        <div id="non-left" className="w-[80%] h-screen absolute right-0">
          <Navbar />
          <div
            ref={imageContainer}
            id="right"
            className="relative top-[17.25%] z-10 px-10"
          >
            {photos.map((photo) => (
              <ImageCard key={photo.id} image={photo.urls.regular} alt={photo.alt_description} download={photo.links.download} />
            ))}
            {photos.map((photo) => (
              <ImageCard key={photo.id} image={photo.urls.regular} alt={photo.alt_description} download={photo.links.download} />
            ))}
            {photos.map((photo) => (
              <ImageCard key={photo.id} image={photo.urls.regular} alt={photo.alt_description} download={photo.links.download} />
            ))}
            {photos.map((photo) => (
              <ImageCard key={photo.id} image={photo.urls.regular} alt={photo.alt_description} download={photo.links.download} />
            ))}
            {photos.map((photo) => (
              <ImageCard key={photo.id} image={photo.urls.regular} alt={photo.alt_description} download={photo.links.download} />
            ))}
          </div>
        </div>
      </div>
    </darkThemeContext.Provider>
  );
}

export default App;