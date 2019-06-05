import React from "react";

const Shops = props => {
  return (
    <div className="search__content">
      {props.initSklepy &&
        props.sklepy.map(item => (
          <div className="search__result-box" key={item.id}>
            <p className="search__text">{item.name} </p>
            <p className="search__text">{item.address}</p>
            <p className="search__text">{item.postalCode}</p>
            <p className="search__text"> {item.phoneNumber}</p>
            <a className="search__link" href={item.url}>
              {"\u{261B}"}
            </a>
          </div>
        ))}
    </div>
  );
};

export default Shops;
