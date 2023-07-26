import React, { Component } from "react";
import "./button.scss";

class Button extends Component {
  render() {
    const { backgroundColor, text, onClick } = this.props;
    return (
      <button style={{ backgroundColor: backgroundColor }} onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Button;
