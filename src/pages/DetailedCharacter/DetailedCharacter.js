import TextField from "../../components/TextField";
import Armothy from "../../assets/images/armothy.png";

import "./DetailedCharacter.scss";
import { NavLink } from "react-router-dom";

const DetailedCharacter = () => {
  return (
    <div className="DetailedCharacter">
      <div className="DetailedCharacter__links">
        <NavLink exact to="/" className="DetailedCharacter__link" activeClassName="DetailedCharacter__link_active">
          Home
        </NavLink>
        <NavLink
          exact
          to="/character"
          className="DetailedCharacter__link"
          activeClassName="DetailedCharacter__link_active"
        >
          #2 Public Opinion Judge
        </NavLink>
      </div>
      <div className="DetailedCharacter__card">
        <div className="DetailedCharacter__avatar">
          <img className="DetailedCharacter__image" src={Armothy} />
        </div>
        <div className="DetailedCharacter__content">
          <h1 className="DetailedCharacter__name">#2 Public Opinion Judge</h1>
          <div className="DetailedCharacter__mainInfo">
            <TextField className="DetailedCharacter__textField" />
            <TextField className="DetailedCharacter__textField" />
            <TextField className="DetailedCharacter__textField" />
            <TextField className="DetailedCharacter__textField" />
          </div>
          <div className="DetailedCharacrer__episodes">
            <TextField className="DetailedCharacter__textField" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCharacter;
