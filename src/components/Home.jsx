import { useEffect, useRef, useContext } from "react";
import ImageCard from "./ImageCard";
import { photosContext } from "../context/ContextAPI";

const Home = () => {
    const imageContainer = useRef();

    const { photos, setPhotos } = useContext(photosContext);
  
    const apiKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
  
    useEffect(() => {
      fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data)
          setPhotos(data)
        });
    }, [apiKey, setPhotos]);

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