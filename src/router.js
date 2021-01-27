import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import DetailedCharacter from "./pages/DetailedCharacter/";
import Header from "./components/Header/Header";

import characters from "./assets/json/stubCharacters.json";

const Router = () => {
  
  const charactersList = characters.results;

  const selectUserById = (id) => charactersList.find((user) => user.id === id);

  return (
    <Switch>
      <Route exact path="/search">
        <Home characters={charactersList} />
      </Route>
      <Route path="*">
        <div>
          <Header />
          <Switch>
            <Route exact path="/character/:id">
              <DetailedCharacter selectCharacterInfo={selectUserById} />
            </Route>
            <Route path="*">
              <Redirect to="/search" />
            </Route>
          </Switch>
        </div>
      </Route>
    </Switch>
  );
};

export default Router;
