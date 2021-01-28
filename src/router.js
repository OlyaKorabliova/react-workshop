import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import DetailedCharacter from "./pages/DetailedCharacter/";
import Header from "./components/Header/Header";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/search">
        <Home />
      </Route>
      <Route path="*">
        <div>
          <Header />
          <Switch>
            <Route exact path="/character/:id">
              <DetailedCharacter />
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
