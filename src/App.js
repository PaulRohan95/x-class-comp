import React, { Component } from "react";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {message: 0};
  };

  handleClickInc = () => {
    this.setState((prevState) => ({
      message: prevState.message + 1
    }));
  };

  handleClickDec = () => {
    this.setState((prevState) => ({
      message: prevState.message - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <div>
          <p>Count: {this.state.message}</p>
        </div>
        <button onClick={this.handleClickInc}>Increment</button>
        <button onClick={this.handleClickDec}>Decrement</button>
      </div>
    );
  }
  }

export default App;