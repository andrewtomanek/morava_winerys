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
    <div className="search__container">
      <form onSubmit={onSubmit} className="search__form">
        <input
          type="text"
          className="search__input"
          placeholder="Zadejte hledané slovo"
          value={searchString.toLowerCase()}
          onChange={onChange}
        />
        <button className="search__button" type="submit">
          Vyhledat
        </button>
      </form>
    </div>
  );
};

export default Form;
