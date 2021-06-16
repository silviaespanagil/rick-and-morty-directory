import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <>
      <div className="detail">
        <Link to="/">
          <p className="detail__back">↩ Volver</p>
        </Link>
        <article className="detail__article">
          <img
            className="detail__article--img"
            src={props.character.image}
            alt={props.character.name}
          />
          <h2 className="detail__article--name">{props.character.name}</h2>
          <p className="detail__article--species">{props.character.species}</p>
          <p className="detail__article--planet">
            Comes from {props.character.origin}
          </p>
          <p className="detail__article--status">
            It's {props.character.status}
          </p>
          <p className="detail__article--episodes">
            Has been in {props.character.episode} episodes
          </p>
        </article>
      </div>
    </>
  );
};

export default CharacterDetail;
