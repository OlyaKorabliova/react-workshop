import { useHistory, Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import Tag from "../Tag";
import "./UserCard.scss";
import TextField from "../TextField";

const UserCard = ({ name, status, gender, location, origin, image, id }) => {
  const history = useHistory();

  const handleClick = () => history.push(`/character/${id}`);

  return (
    <div className="UserCard">
      <img className="UserCard__image" src={image} />
      <div className="UserCard__info">
        <Link to="/character">
          <header onClick={handleClick} className="UserCard__name">
            {name}
          </header>
        </Link>
        <div className="UserCard__tags">
          <Tag className="UserCard__tag">{gender}</Tag>
          <Tag className="UserCard__tag">{status}</Tag>
        </div>
        <TextField label="Last known location:" className="UserCard__textField">
          {location?.name}
        </TextField>
        <TextField label="First seen in:" className="UserCard__textField">
          {origin?.name}
        </TextField>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  location: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  origin: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default UserCard;
