const CharacterCard = (props) => {
  return (
    <>
      <article>
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <p>{props.species}</p>
      </article>
    </>
  );
};

export default CharacterCard;
