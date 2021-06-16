const dead = <i title="Dead" class="fas fa-skull icons"></i>;
const alive = <i title="Alive" class="fas fa-heartbeat icons"></i>;

const DeadOrAlive = (props) => {
  const isAlive = (status) => {
    if (status === "Dead") {
      return dead;
    } else if (status === "Alive") {
      return alive;
    }
  };
  return (
    <>
      <span>{isAlive(props.status)}</span>
    </>
  );
};
export default DeadOrAlive;
