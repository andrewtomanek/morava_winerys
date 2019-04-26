import React, { useState } from "react";

const Form = props => {
  const [searchString, setSearchString] = useState("");
  const [oldSearchString, setOldSearchString] = useState("");

  const resetSearch = () => {
    setSearchString("");
    props.resetSearch();
  };

  const onChange = event => {
    const newSearchString = event.target.value.trim();
    setSearchString(newSearchString);
    setOldSearchString(newSearchString);
    if (
      newSearchString.length !== "" &&
      oldSearchString.length >= newSearchString.length
    ) {
      setOldSearchString("");
      setSearchString("");
      resetSearch();
      return;
    }
    props.searchDatabase(newSearchString);
  };
  const onSubmit = event => {
    event.preventDefault();
    if (searchString.trim() === "") return;
    const newSearchString = searchString.trim();
    props.searchDatabase(newSearchString);
    setSearchString(newSearchString);
  };
  return (
    <div className="col">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Vyhledat"
          value={searchString.toLowerCase()}
          onChange={onChange}
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
