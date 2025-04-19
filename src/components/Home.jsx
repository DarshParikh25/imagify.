import { useEffect, useRef, useState } from "react";
import ImageCard from "./ImageCard";

const Home = () => {
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
  )
}

export default Home