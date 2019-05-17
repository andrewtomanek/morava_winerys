import React from "react";

function BaseButton(props) {
  return (
    <button onClick={props.onClick} value={props.value}>
      Detail
    </button>
  );
}
export default BaseButton;
