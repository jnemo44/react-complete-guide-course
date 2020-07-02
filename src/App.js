import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
  persons: [
    { name: "Joe", age:"28"},
    { name: "Matt", age:"31"}
  ],
  otherState: "Some other value",
  showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log("Was Clicked!!!!!!!");
    this.setState({ 
      persons: [
      { name: newName, age:28},
      { name: "Matt", age:39}
      ]
    });
  };

  nameChangeHandler = (event) => {
    this.setState({ 
      persons: [
      { name: "Joey", age:28},
      { name: event.target.value, age:39}
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '10x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }


    return (
      <div className="App">
        <hi>Hi, I'm a react app</hi>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        { 
          this.state.showPersons ?
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} 
              />
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, "Jiggero!!!!!")} 
                changed={this.nameChangeHandler}>My hobbies: Running</Person>
            </div> : null
        }
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