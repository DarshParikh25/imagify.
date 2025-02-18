// imagecard.jsx
import PropTypes from 'prop-types';

const ImageCard = (props) => {
  return (
    <img id='dynamic-image' className='rounded-2xl hover:scale-105 hover:duration-[210ms]' src={props.image} alt={props.alt}/>
  )
}

ImageCard.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  alt: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};

export default ImageCard