import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <>
      <div className="detail">
        <Link to="/" className="detail__back">
          <p className="detail__back">↩ Volver</p>
        </Link>
        <article className="detail__article">
          <img
            className="detail__article--img"
            src={props.character.image}
            alt={props.character.name}
          />
          <div className="detail__article--info">
            <h2 className="detail__article--info-name">
              {props.character.name}
            </h2>
            <p className="detail__article--info-all">
              {props.character.species}
            </p>
            <p className="detail__article--info-all">
              Comes from {props.character.origin}
            </p>
            <p className="detail__article--info-all">
              It's {props.character.status}
            </p>
            <p className="detail__article--info-all">
              Has been in {props.character.episode} episodes
            </p>
          </div>
        </article>
      </div>
    </>
  );
};

export default CharacterDetail;

CharacterDetail.propTypes = { character: PropTypes.object };
