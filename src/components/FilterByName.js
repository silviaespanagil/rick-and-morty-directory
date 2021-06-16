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
    <form className="filter__form" onSubmit={handleSubmit}>
      <label htmlFor="searchBox"></label>
      <input
        className="filter__form--textBox"
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
