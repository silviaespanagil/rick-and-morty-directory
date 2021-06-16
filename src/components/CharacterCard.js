import PropTypes from "prop-types";
import DeadOrAliveIcon from "./DeadOrAliveIcon.js";
import SpecieIcon from "./SpecieIcon.js";

const CharacterCard = (props) => {
  return (
    <>
      <article className="character__li--article">
        <img
          className="character__li--article-img"
          src={props.image}
          alt={props.name}
        />
        <div className="character__li--article-info">
          <h2 className="character__li--article-info-name">{props.name}</h2>
          <p>{props.species}</p>
          <DeadOrAliveIcon status={props.status} />
          <SpecieIcon specie={props.species} />
        </div>
      </article>
    </>
  );
};

export default CharacterCard;

CharacterCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
};
