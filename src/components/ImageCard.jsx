import PropTypes from 'prop-types';

const ImageCard = ({imgs}) => {
  return (
    <div>
      <div className="container">
        {imgs.forEach(img => {
          console.log(img);
        })}
      </div>
    </div>
  )
}

ImageCard.prototype = {
  props : PropTypes.object.isRequired,
}

export default ImageCard
