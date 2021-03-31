import './App.css';
import React, {Component} from 'react';

class App extends Component {
  initialState = {
    year: 'Year=2021',
    paragon: 'Yes, but Arena first',
    frontend: 'React'
  };
  // state = this.initialState;
  // handleChange = (event) => {
  //   const { name, value} = event.target;
  //   this.setMyStorage({
  //     [name]: value,
  //   });
  // };
 setMyStorage = () => {
   const { year, paragon, frontend } =
   this.initialState;
  //  this.setMyStorage({ name: "value" });
   // Cookie
   document.cookie = year;
   // Local Storage
   localStorage.setItem('Paragon', paragon);
   // Session Storage
   sessionStorage.setItem('frontend', frontend);
 };
  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setMyStorage}>set Cookies</button>
        <button type="button" onClick={this.getMyStorage}>get Cookies</button>
      </div>
    );
  }
} 
export default App;