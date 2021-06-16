import portal from "../images/portal.gif";

const NoResults = (props) => {
  return (
    <>
      <div className="noResults">
        <p className="noResults__text">
          Ops, <span className="noResults__text-input">{props.filterName}</span>{" "}
          is not in this dimension.
        </p>
        <img className="noResults__img" src={portal} alt="Not found" />
      </div>
    </>
  );
};

export default NoResults;
