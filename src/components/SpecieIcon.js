const alien = (
  <span className="icons" title="Alien">
    👽
  </span>
);
const human = <i title="Human" className="fas fa-user icons"></i>;
const unknown = (
  <i title="Who knows what it is" className=" icons fas fa-question"></i>
);

const SpecieIcon = (props) => {
  const specieIs = (specie) => {
    if (specie.toLowerCase() === "human") {
      return human;
    } else if (specie.toLowerCase() === "alien") {
      return alien;
    } else if (specie.toLowerCase() === "unknown") {
      return unknown;
    }
  };
  return <>{specieIs(props.specie)}</>;
};

export default SpecieIcon;
