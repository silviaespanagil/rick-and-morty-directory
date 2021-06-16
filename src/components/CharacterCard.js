const CharacterCard = (props) => {
  return (
    <>
      <article className="character__li--article">
        <img
          className="character__li--article-img"
          src={props.image}
          alt={props.name}
        />
        <h2>{props.name}</h2>
        <p>{props.species}</p>
      </article>
    </>
  );
};

export default CharacterCard;
