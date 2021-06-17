import { Link } from "react-router-dom";
import existNot from "../images/existNot.gif";

const NoCharacterDetail = () => {
  return (
    <>
      <Link to="/">
        <p className="noCharacterBack">↩ Back</p>
      </Link>
      <div className="noCharacter">
        <p className="noCharacter__text">
          This page does not exist...but do we?
        </p>
        <img className="noCharacter__img" src={existNot} alt="error 404" />
      </div>
    </>
  );
};

export default NoCharacterDetail;
