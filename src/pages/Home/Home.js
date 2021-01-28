import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import UserList from "../../components/UserList";
import "./Home.scss";
import { getCharacters } from "../../api";

function Home() {
  const [characterName, setCharacterName] = useState("");
  const [characterGender, setGender] = useState("");
  const [characterStatus, setStatus] = useState("");
  const [characters, setCharacters] = useState();

  useEffect(() => {
    loadCharacters(undefined, {
      ...(characterName && { name: characterName }),
      ...(characterStatus && { status: characterStatus }),
      ...(characterGender && { gender: characterGender })
    });
  }, [characterName, characterGender, characterStatus]);

  const loadCharacters = async (page = 1, params) => {
    const items = await getCharacters(page, params);
    setCharacters(items?.results);
  }
  
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
      <UserList characters={characters} />
    </div>
  );
}

export default Home;
