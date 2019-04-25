import React from "react";

const Shops = props => {
  return (
    <div className="col">
      <h2>Shops: </h2>
      <hr />
      {props.sklepy.map(p => (
        <div key={Math.random() * 1000000000}>
          <p>
            {p.name} {p.id}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Shops;
