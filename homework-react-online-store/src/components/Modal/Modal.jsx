import React, { Component } from "react";
import PropTypes from "prop-types";
import "./modal.scss";
import {AiOutlineClose} from 'react-icons/ai';

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
                  <AiOutlineClose />
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


Modal.propTypes = {
  header: PropTypes.string,
  closeButton: PropTypes.bool,
  text: PropTypes.string,
  onClose: PropTypes.func
};

Modal.defaultProps = {
  header: 'modal',
  closeButton: true,
  text: 'default text'
}

export default Modal;