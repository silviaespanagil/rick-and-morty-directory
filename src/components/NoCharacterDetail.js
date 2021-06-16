import { Link } from "react-router-dom";
import existNot from "../images/existNot.gif";

const NoCharacterDetail = () => {
  return (
    <>
      <Link to="/">
        <p className="back">↩ Volver</p>
      </Link>
      <img src={existNot} alt="error 404" />
      <p>This page does not exist...but do we?</p>
    </>
  );
};

export default NoCharacterDetail;
