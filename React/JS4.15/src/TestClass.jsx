import React, { Component } from "react";

class TestClass extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ isClicked: !prevState.isClicked }));
  }

  render() {
    const { isClicked } = this.state;

    return (
      
      <div class="card">
        <div class="card-header">
          <h1 style={{ color: isClicked ? "red" : "black" }}>Привет, мир!</h1>
        </div>
        <div class="card-body">
          <h5 class="card-title" style={{ color: isClicked ? "green" : "blue" }}>Hello, world!</h5>
          <p class="card-text">Данный компонент был реализован с использованием классов!</p>
          <button class="btn btn-primary" onClick={this.handleClick}>Нажми меня!</button>
       </div>
      </div>
    );
  }
}

export default TestClass;
