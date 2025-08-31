import PropTypes from "prop-types";

const FeatureCard = (props) => {
  return (
    <div className="bg-white rounded-xl p-16 flex flex-col gap-5 justify-self-center max-w-md shadow-lg">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-3xl font-bold">{props.head}</h3>
        <h4 className="text-lg font-semibold leading-relaxed">
          {props.subhead}
        </h4>
      </div>
      <p>{props.desc}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  head: PropTypes.string,
  subhead: PropTypes.string,
  desc: PropTypes.string,
};

export default FeatureCard;
