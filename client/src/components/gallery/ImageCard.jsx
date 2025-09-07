import { useState } from "react";
// import { saveAs } from 'file-saver'
import PropTypes from "prop-types";
import { Download, Bookmark, Share2 } from "lucide-react";

const ImageCard = (props) => {
  const [isSaved, setIsSaved] = useState(false);

  const savedImages = [];

  const handleDownload = (e) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = props.image;
    link.download = `${props.download}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // const handleDownload = () => {
  //   saveAs(`${props.download}`, `${props.alt}.jpg`)
  // }

  const handleSave = (e) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
    if (!isSaved) {
      savedImages.push({
        image: props.image,
        alt: props.alt,
      });
    } else {
      savedImages.filter((img) => img.image !== props.image);
    }
    // console.log(savedImages)
  };

  const handleShare = (e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator
        .share({
          title: props.alt || "Shared Image",
          text: `Check out this image: ${props.alt}`,
          url: props.image,
        })
        .catch((err) => {
          console.error("Error sharing:", err);
        });
    }
  };

  return (
    <div className="relative group rounded-2xl overflow-hidden hover:cursor-pointer mb-6">
      <img
        id="dynamic-image"
        className="w-full transition-transform duration-200 group-hover:scale-105"
        src={props.image}
        alt={props.alt}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-end justify-between h-full py-4">
        <div className="flex gap-2 px-4">
          <button
            onClick={handleSave}
            className={`p-2 rounded-full ${
              isSaved
                ? "bg-blue-500 hover:bg-opacity-80 font-semibold"
                : "bg-white bg-opacity-20 hover:bg-opacity-30"
            } flex items-center justify-center text-white transition-colors space-x-1`}
            aria-label="Save"
          >
            <Bookmark size={20} fill={isSaved ? "white" : "none"} />
            <p className="text-sm">Save</p>
          </button>
          <button
            onClick={handleShare}
            className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center text-white transition-colors"
            aria-label="Share"
          >
            <Share2 size={20} />
          </button>
        </div>
        <div className="flex w-full justify-start items-center">
          <p className="text-white px-4 text-lg">{props.alt}</p>
          <button
            onClick={handleDownload}
            className="p-2 mr-4 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center text-white transition-colors h-fit"
            aria-label="Download"
          >
            <Download size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  alt: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  download: PropTypes.string,
};

export default ImageCard;
