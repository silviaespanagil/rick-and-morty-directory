const FilterByName = () => {
  const handleSearchBox = (ev) => {
    const searchValue = ev.currentTarget.value;
    return console.log(searchValue);
  };
  return (
    <form>
      <label forHtml="searchBox"></label>
      <input id="SearchBox" type="text" onChange={handleSearchBox} />
    </form>
  );
};

export default FilterByName;
