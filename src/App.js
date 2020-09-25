import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      {name: "Danylo", age: 26},
      {name: "Max", age: 30}
    ]
  }

  switchHandler = () => {
    console.log('Was clicked');
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={this.switchHandler}>Click me</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Super Test</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
      </div>
    );
  }
}

export default App;
