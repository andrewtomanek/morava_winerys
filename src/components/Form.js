import React, { useState } from "react";

const Form = props => {
  const [searchString, setSearchString] = useState("");
  const resetSearch = () => {
    setSearchString("");
    props.resetSearch();
  };

  const onChange = event => {
    setSearchString(event.target.value);
    const newsearchString = searchString.trim();
    props.searchDatabase(newsearchString);
  };
  const onSubmit = event => {
    event.preventDefault();
    if (searchString.trim() === "") return;

    const newsearchString = searchString.trim();

    props.searchDatabase(newsearchString);
    setSearchString(newsearchString);
  };
  return (
    <div className="col">
      <h2>Add a person: </h2>
      <hr />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Last Name.."
          value={searchString.toLowerCase()}
          onChange={onChange}
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
      <button className="btn" onClick={resetSearch}>
        Reset
      </button>
    </div>
  );
};

export default Form;
