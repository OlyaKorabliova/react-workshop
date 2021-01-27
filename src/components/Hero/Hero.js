import { statusOptions, genderOptions } from "../../utils";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import Select from "../Select";

import Search from "../Search";
import "./Hero.scss";

const Hero = ({ characterName, setCharacterName, gender, setGender, status, setStatus }) => {
  return (
    <div className="Hero">
      <h1 className="Hero__heading">
        <span>surf the</span>
        <Logo className="Hero__logo" />
        <span>universe</span>
      </h1>
      <Search className="Hero__search" setValue={setCharacterName} value={characterName} />
      <div className="Hero__filters">
        <Select label="Status" value={status} handleSelect={setStatus} options={statusOptions} />
        <Select label="Gender" value={gender} handleSelect={setGender} options={genderOptions} />
      </div>
    </div>
  );
};

export default Hero;
