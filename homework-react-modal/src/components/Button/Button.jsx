import React, { Component } from "react";
import "./button.scss";

class Button extends Component {
  render() {
    const { backgroundColor, text, onClick, dataModal } = this.props;
    return (
      <button style={{ backgroundColor: backgroundColor }} data-modal={dataModal} onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Button;
