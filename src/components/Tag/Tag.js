import "./Tag.scss";

const Tag = ({ className, childen }) => {
  return <div className={`Tag ${className}`}>{childen}</div>;
};

export default Tag;
