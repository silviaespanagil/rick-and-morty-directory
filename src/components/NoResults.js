import { Link } from "react-router-dom";
import portal from "../images/portal.gif";

const NoResults = (props) => {
  return (
    <>
      <Link to="/">
        <p>Volver</p>
      </Link>
      <img src={portal} alt="Not found" />
      <p>Ops, {props.filterName} is not in this dimension</p>
    </>
  );
};

export default NoResults;
