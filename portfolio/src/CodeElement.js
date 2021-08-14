import React, { Component } from "react";
import { Link } from "react-router-dom";

class CodeElement extends Component {
  render() {
    return (
      <div class="CodeElement">
        <div class="CodeElementPhoto">
          <a href={this.props.link}>
            <img
              src="/media/code.jpg"
              alt="cannot display"
              width="250px"
              height="250px"
            />
          </a>
        </div>
        <p id="CodeElementText">{this.props.title}</p>
      </div>
    );
  }
}

export default CodeElement;
