const FilterByName = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleSearchBox = (ev) => {
    props.handleFilter({
      searchValue: ev.target.value,
      key: "name",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchBox"></label>
      <input
        placeholder="Rick"
        id="SearchBox"
        type="text"
        value={props.lsFilter}
        onChange={handleSearchBox}
      />
    </form>
  );
};

export default FilterByName;
