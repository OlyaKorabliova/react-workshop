import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <Logo className="Header__logo" />
      </Link>
    </div>
  );
};

export default Header;
