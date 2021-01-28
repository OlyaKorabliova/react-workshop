import { useEffect, useState, useCallback } from "react";
import { NavLink, useParams } from "react-router-dom";
import { genderTags, statusTags } from "../../utils";
import Tag from "../../components/Tag";
import TextField from "../../components/TextField";
import { getCharacterById } from '../../api';

import "./DetailedCharacter.scss";

const DetailedCharacter = () => {
  const { id } = useParams();
  const [characterInfo, setCharacterInfo] = useState();

  const loadData = useCallback(async () => {
    const character = await getCharacterById(id)
    setCharacterInfo(character);
  }, [id, setCharacterInfo]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const { name, species, created, episode, status, gender, location, origin, image } = characterInfo || {};

  const renderEpisode = (episodeItem) => <div key={episodeItem}>{episodeItem}</div>;

  return (
    <div className="DetailedCharacter">
      <div className="DetailedCharacter__links">
        <NavLink exact to="/" className="DetailedCharacter__link" activeClassName="DetailedCharacter__link_active">
          Home
        </NavLink>
        <NavLink
          exact
          to={`/character/${id}`}
          className="DetailedCharacter__link"
          activeClassName="DetailedCharacter__link_active"
        >
          #{id} {name}
        </NavLink>
      </div>
      <div className="DetailedCharacter__card">
        <div className="DetailedCharacter__avatar">
          <img alt="avatar" className="DetailedCharacter__image" src={image} />
        </div>
        <div className="DetailedCharacter__content">
          <h1 className="DetailedCharacter__name">
            #{id} {name}
          </h1>
              <div className="DetailedCharacter__tags">
                {genderTags[gender] && (
                  <Tag
                    className="DetailedCharacter__tag"
                    imageSrc={genderTags[gender].image}
                    title={genderTags[gender].text}
                  />
                )}
                {statusTags[status] && (
                  <Tag
                    className="DetailedCharacter__tag"
                    imageSrc={statusTags[status].image}
                    title={statusTags[status].text}
                  />
                )}
              </div>
          <div className="DetailedCharacter__mainInfo">
            <div className="DetailedCharacter__column">
              <TextField label="Species:" className="DetailedCharacter__textField">
                {species}
              </TextField>
              <TextField label="Origin:" className="DetailedCharacter__textField">
                {origin?.name}
              </TextField>
              <TextField label="Birthday:" className="DetailedCharacter__textField">
                {created}
              </TextField>
              <TextField label="Last known location:" className="DetailedCharacter__textField">
                {location?.name}
              </TextField>
              <TextField label="First seen in:" className="DetailedCharacter__textField">
                {episode?.[0]}
              </TextField>
            </div>
            <div className="DetailedCharacter__column">
              <TextField label="Episodes" className="DetailedCharacter__textField">
                {episode?.map(renderEpisode)}
              </TextField>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCharacter;
