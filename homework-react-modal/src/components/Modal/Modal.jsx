import React, { Component } from "react";
import "./modal.scss";
import svg from "./icons.svg";

class Modal extends Component {
  handleModalContentClick = (e) => {
    e.stopPropagation();
  };
  
  render() {
    const { data, onClose } = this.props;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={this.handleModalContentClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{data.header}</h3>
              {data.closeButton ? (
                <span className="close-btn" onClick={onClose}>
                  <img src={svg} alt="" />
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="modal-body">
              <p>{data.text}</p>
            </div>
            <div className="modal-footer">{data.actions}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
