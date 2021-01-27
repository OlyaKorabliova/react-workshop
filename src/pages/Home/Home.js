import { useState } from "react";
import Hero from "../../components/Hero";
import UserList from "../../components/UserList";
import "./Home.scss";

function Home({ characters }) {
  const [characterName, setCharacterName] = useState("");
  const [characterGender, setGender] = useState("");
  const [characterStatus, setStatus] = useState("");

  const filterCharacters = () =>
    characters.filter(({ name, gender, status }) => {
      const isMatchedByName = !characterName || name?.toLowerCase().includes(characterName.toLowerCase());
      const isMatchedByGender = !characterGender || gender === characterGender;
      const isMatchedByStatus = !characterStatus || status === characterStatus;

      return isMatchedByName && isMatchedByGender && isMatchedByStatus;
    });

  return (
    <div className="Home">
      <Hero
        characterName={characterName}
        setCharacterName={setCharacterName}
        gender={characterGender}
        setGender={setGender}
        status={characterStatus}
        setStatus={setStatus}
      />
      <UserList characters={filterCharacters()} />
    </div>
  );
}

export default Home;
