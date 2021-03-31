import './App.css'
import React, { Component } from 'react';

class App extends Component {
  initialState = {
    value: 'Selection Month'
  };

  setLocalStorage = () => {
    const { value } = this.initialState;
    localStorage.setItem('Arena', value);
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.setLocalStorage}>
          Set Local Storage
        </button>
      </div>
    );
  }
}


export default App;
