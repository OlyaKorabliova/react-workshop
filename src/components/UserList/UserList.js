import UserCard from "../UserCard";
import "./UserList.scss";

const UserList = ({ characters }) => {
  const renderCharacter = (character) => <UserCard key={character.id} {...character} />;

  return <div className="UserList">{characters?.map(renderCharacter)}</div>;
};

export default UserList;
