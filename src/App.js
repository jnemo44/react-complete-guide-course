import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Joe", age:"28"},
      { name: "Matt", age:"31"},
    ]
  }
  
  render() {
    return (
      <div className="App">
        <hi>Hi, I'm a react app</hi>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Running </Person>
        <Person/>
      </div>
      
    );
    //return React.createElement('div', null, 'h1', 'HI, I\'m a react app!!!')
  }
}

// Makes the App class default when importing it somewhere else
export default App;
