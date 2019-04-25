import React, { useState } from "react";

const Form = props => {
  const [person, setPerson] = useState({ lastName: "" });
  const onChange = event => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };
  const onSubmit = event => {
    event.preventDefault();
    if (person.lastName.trim() === "") return;

    const newPerson = {
      lastName: person.lastName.trim()
    };

    props.addPerson(newPerson);
    setPerson({ lastName: "" });
  };
  return (
    <div className="col">
      <h2>Add a person: </h2>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Last Name.."
            value={person.lastName}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Add person
        </button>
      </form>
    </div>
  );
};

export default Form;
