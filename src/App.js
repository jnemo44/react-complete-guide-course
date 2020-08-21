import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'blue' : 'green'};
  color: white;
  font: inherit;
  border: 10x solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'pink': 'purple'};
    color: blue;
  `;

class App extends Component {
  state = {
  persons: [
    { id:"assas", name: "Joe", age:"28"},
    { id:"dsdsd", name: "Matt", age:"31"},
    { id:"ledeg", name: "Jasmin", age:"48"}
  ],
  otherState: "Some other value",
  showPersons: false
  };

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

  deletePersonHandler = (personIndex) => {
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

    

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name}  
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(person.id, event)}
              />
          })}
        </div>
      );
      //style.backgroundColor = 'red';
      //style[':hover'] = {
      //  backgroundColor: 'salmon',
     //   color: 'black'
      //};
    };

    let styling = [];

    if (this.state.persons.length <= 2)
      styling.push('red')

    if (this.state.persons.length <= 1)
      styling.push('bold')

    return (
      <div className="App">
        <hi>Hi, I'm a react app</hi>
        <p className={styling.join(' ')}>This is really working!</p>
        <StyledButton 
          alt={this.state.showPersons} 
          onClick={this.togglePersonsHandler}>Toggle Name
        </StyledButton>
        
        {persons}

      </div>
    );
  };

};

  

// Makes the App class default when importing it somewhere else
export default App;

/*
const App = props => {
  const [this.state, setthis.state] = useState({
    persons: [
      { name: "Joe", age:28},
      { name: "Matt", age:31}
    ]
  }); 

  const [otherState, setOtherState] = useState({
    otherState:"Some other value"
  })

  console.log(this.state, otherState)
  
  const switchNameHandler = (newName) => {
    // console.log("Was Clicked!!!!!!!");
    setthis.state({ 
      persons: [
      { name: newName, age:28},
      { name: "Matt", age:39}
      ],
      otherState: this.state.otherState
    });
  };
  
  return (
    <div className="App">
      <hi>Hi, I'm a react app</hi>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
      />
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={switchNameHandler} >My hobbies: Running</Person>
    </div>    
  );

};
*/