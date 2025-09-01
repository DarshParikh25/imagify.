import PropTypes from "prop-types";

const FeatureCard = (props) => {
  return (
    <div className="relative bg-white/20 backdrop-blur-xl text-white rounded-xl p-16 flex flex-col gap-5 justify-self-center max-w-md shadow-lg">
      <div className="absolute z-10 -top-5 -left-5 bg-blue-400 text-white rounded-full w-20 h-20 flex justify-center items-center text-2xl font-bold">
        {props.rank}
      </div>
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
  rank: PropTypes.number,
  head: PropTypes.string,
  subhead: PropTypes.string,
  desc: PropTypes.string,
};

export default FeatureCard;
