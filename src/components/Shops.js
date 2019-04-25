import React from "react";

const Shops = props => {
  return (
    <div className="col">
      {props.initSklepy &&
        props.sklepy.map(item => (
          <div className="search__result-box" key={item.id}>
            <p>{item.name} </p>
            <p>{item.address}</p>
            <p>{item.postalCode}</p>
            <p> {item.phoneNumber}</p>
            <a href={item.url}>{item.website}</a>
          </div>
        ))}
    </div>
  );
};

export default Shops;
