const FilterByName = (props) => {
  const handleSearchBox = (ev) => {
    props.handleFilter({
      searchValue: ev.target.value,
      key: "name",
    });
  };
  return (
    <>
      <label htmlFor="searchBox"></label>

      <input
        className="filter__form--textBox"
        placeholder="Rick"
        id="SearchBox"
        type="text"
        value={props.lsFilter}
        onChange={handleSearchBox}
      />
    </>
  );
};

export default FilterByName;
