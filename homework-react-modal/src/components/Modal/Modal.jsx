import React, { Component } from "react";
import "./modal.scss";
import svg from "./icons.svg";

class Modal extends Component {
  handleModalContentClick = (e) => {
    e.stopPropagation();
  };
  
  render() {
    const { header, closeButton, text, actions, onClose } = this.props;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={this.handleModalContentClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{header}</h3>
              {closeButton ? (
                <span className="close-btn" onClick={onClose}>
                  <img src={svg} alt="" />
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="modal-body">
              <p>{text}</p>
            </div>
            <div className="modal-footer">{actions}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
