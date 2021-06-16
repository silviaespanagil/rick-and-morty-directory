const dead = <i title="Dead" className="icons fas fa-skull icons"></i>;
const alive = <i title="Alive" className=" icons fas fa-heartbeat "></i>;
const unknown = (
  <i title="May be alive...or not" className=" icons fas fa-question"></i>
);

const DeadOrAliveIcon = (props) => {
  const isAlive = (status) => {
    if (status.toLowerCase() === "dead") {
      return dead;
    } else if (status.toLowerCase() === "alive") {
      return alive;
    } else if (status.toLowerCase() === "unknown") {
      return unknown;
    }
  };
  return <>{isAlive(props.status)}</>;
};
export default DeadOrAliveIcon;
