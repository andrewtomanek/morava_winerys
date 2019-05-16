import React from "react";

const City = ({ item, pickItem }) => {
  return (
    <div className="citis__cell">
      <button
        className="citis__name"
        onClick={() => pickItem(item.toLowerCase())}
      >
        {item}
      </button>
    </div>
  );
};

export default City;
