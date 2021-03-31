import './App.css';
import React, { Component } from "react";
class App extends Component {
  initialState = {
    value: 'Selection Month',
  };
  setLocalStorage = () => {
    const { value } = this.initialState;
    localStorage.setItem('Arena',
      value);
  };
  getLocalStorage = () => {
    const myLocalStorageData = 
    localStorage.getItem('Arena');
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.setLocalStorage}>
          Set Local Storage
          </button>
        <button onClick={this.getLocalStorage}>
          Get Local Storage
          </button>
      </div>
    );
  }
}
export default App;