import React from "react";

import "./Modal.css";

const Modal = props => {
  return (
    <div className="modal">
      <header className="modal__header">
        <h1>{props.title}</h1>
      </header>
      <section className="modal__content">
        <p>{props.character}</p>
      </section>
      <button onClick={props.onExit}>Exit</button>
    </div>
  );
};

export default Modal;
