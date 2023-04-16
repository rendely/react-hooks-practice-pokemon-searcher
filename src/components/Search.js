import React from "react";

function Search({search, setSearch}) {
  function handleInputChange(e){
    setSearch(e.target.value);
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={handleInputChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
