import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <form className="filter__form" onSubmit={handleSubmit}>
        <FilterByName
          handleFilter={props.handleFilter}
          lsFilter={props.FilterName}
        />
        <FilterBySpecies handleFilter={props.handleFilter} />
      </form>
    </>
  );
};
export default Filters;
