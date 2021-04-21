import React from "react";

import { CSSTransition } from "react-transition-group";
import Modal from "./Modal";

function ModalContainer({ modalToggle, ...props }) {
  return (
    <CSSTransition
      in={modalToggle}
      timeout={500}
      classNames="alert"
      unmountOnExit
    >
      <div className="modal__overlay open" onClick={() => props.closeModal()}>
        <Modal {...props} />
      </div>
    </CSSTransition>
  );
}

export default ModalContainer;
