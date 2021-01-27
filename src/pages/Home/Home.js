import Hero from "../../components/Hero";
import UserList from "../../components/UserList";
import "./Home.scss";

function Home({ characters }) {
  console.log("> ", characters);

  return (
    <div className="Home">
      <Hero />
      <UserList characters={characters} />
    </div>
  );
}

export default Home;
