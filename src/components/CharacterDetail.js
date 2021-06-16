import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <>
      <Link to="/">
        <p>Volver</p>
      </Link>
      <article>
        <img src={props.character.image} alt={props.character.name} />
        <h2>{props.character.name}</h2>
        <p>{props.character.species}</p>
        <p>Comes from {props.character.origin}</p>
        <p>It's {props.character.status}</p>
        <p>{props.character.episode}</p>
      </article>
    </>
  );
};

export default CharacterDetail;
