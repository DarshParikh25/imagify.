// app.jsx
import VerticalNavbar from "./components/VerticalNavbar";
import ImageCard from "./components/ImageCard";
import HorizontalNavbar from "./components/HorizontalNavbar";
import { useRef, useEffect, useState } from "react";

function App() {
  const imageContainer = useRef();
  const apiKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
  const [photos, setPhotos] = useState([])
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
    <div className="flex relative">
      <div id="left" className="fixed top-0 w-[20%]"> 
        <VerticalNavbar />
      </div>
      <div id="non-left" className="w-[80%] h-screen absolute right-0">
        <HorizontalNavbar />
        <div
          ref={imageContainer}
          id="right"
          className="relative top-[17.25%] z-10 px-10"
        >
          {photos.map((photo) => (
            <ImageCard key={photo.id} image={photo.urls.regular} alt={photo.alt_description} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;