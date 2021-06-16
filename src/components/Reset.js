import PropTypes from "prop-types";

const Reset = (props) => {
  return (
    <button className="filter__resetBut" onClick={props.reset} type="button">
      Reset
    </button>
  );
};

export default Reset;

Reset.propTypes = { reset: PropTypes.func };
