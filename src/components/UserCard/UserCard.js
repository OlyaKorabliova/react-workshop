import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { genderTags, statusTags } from "../../utils";
import Tag from "../Tag";
import TextField from "../TextField";

import "./UserCard.scss";

const UserCard = ({ name, status, gender, location, origin, image, id }) => (
  <div className="UserCard">
    <img className="UserCard__image" src={image} />
    <div className="UserCard__info">
      <Link to={`/character/${id}`}>
        <header className="UserCard__name">{name}</header>
      </Link>
      <div className="UserCard__tags">
        {genderTags[gender] && (
          <Tag className="UserCard__tag" imageSrc={genderTags[gender].image} title={genderTags[gender].text} />
        )}
        {statusTags[status] && (
          <Tag className="UserCard__tag" imageSrc={statusTags[status].image} title={statusTags[status].text} />
        )}
      </div>
      <TextField label="Last known location:" className="UserCard__textField">
        {location?.name}
      </TextField>
      <TextField label="Origin:" className="UserCard__textField">
        {origin?.name}
      </TextField>
    </div>
  </div>
);

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
