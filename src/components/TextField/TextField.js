import "./TextField.scss";

const TextField = ({ className }) => {
  return (
    <div className={`TextField ${className}`}>
      <div className="TextField__label">Species:</div>
      <div className="TextField__value">Human</div>
    </div>
  );
};

export default TextField;
