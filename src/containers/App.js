import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
constructor(props) {
  super(props);
  console.log('[App.js] constructor');
}

state = {
  persons: [
  { id:"assas", name: "Joe", age:"28"},
  { id:"dsdsd", name: "Matt", age:"31"},
  { id:"ledeg", name: "Jasmin", age:"48"}
  ],
otherState: "Some other value",
showPersons: false
};

static getDerivedStateFromProps(props, state) {
  console.log('[App.js] getDerivedStateFromProps', props);
  return state;
}

componentDidMount() {
  console.log('[App.js] componentDidMount');
}
 
//componentWillMount() {
//  console.log('[App.js] componentWillMount');
//}

nameChangeHandler = (id, event) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({persons: persons});
}

deletePersonHandler = personIndex => {
  //const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

render () {
  console.log('[App.js] render');
  let persons = null;

  if (this.state.showPersons) {
    persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
  };

  return (
    <div className={classes.App}>
      <Cockpit 
      showPersons={this.state.showPersons}
      persons={this.state.persons} 
      clicked={this.togglePersonsHandler}/>
      {persons}
    </div>
  );
  };

};


// Makes the App class default when importing it somewhere else
export default App;