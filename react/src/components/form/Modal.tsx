import React, { Component } from "react";

export default class Modal extends React.Component {
  render(): JSX.Element {
    return (
      <>
        <div className="modal-bg"></div>
        <div className="modal">
          <div>Форма отправлена!</div>
        </div>
      </>
    );
  }
}
