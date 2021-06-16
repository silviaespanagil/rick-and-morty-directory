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
        </div>
      </article>
    </>
  );
};

export default CharacterCard;
