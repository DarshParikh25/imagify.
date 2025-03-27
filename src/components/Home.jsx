import { useOutletContext } from "react-router-dom";
import ImageCard from "./ImageCard";

const Home = () => {
  const { photos } = useOutletContext();

  return (
    <div>
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