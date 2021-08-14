import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div id="main">
          <div id = "photo">
              <img src="/media/circle-cropped.png" alt="cannot display"/>
          </div>
          <div id="name"><h1>Dylan Hoover</h1></div>
          <div id="info"><h2>Computer Engineering Student</h2></div>
          <div id="bio">
              <p>Hello I'm Dylan Hoover, I am a current student at Santa Clara Univerity studying computer science and engineering. This website serves as a portfolio for my projects and class work. I have experiences in Machine learning </p>
          </div>
      </div>
    );
  }
}

export default Home;