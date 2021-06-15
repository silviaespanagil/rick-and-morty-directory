import { Link } from "react-router-dom";

const NoResults = (props) => {
  return (
    <>
      <Link to="/">
        <button onClick={props.reset}>Volver</button>
      </Link>
      <p>No hay resultados con tu busqueda</p>
    </>
  );
};

export default NoResults;
