import PropTypes from "prop-types";
import "./Tag.scss";

const Tag = ({ className = "", imageSrc, title }) => {
  return (
    <div className={`Tag ${className}`}>
      <img className="Tag__image" src={imageSrc} />
      <span className="Tag__title">{title}</span>
    </div>
  );
};

Tag.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Tag;
