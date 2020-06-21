import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Joe", age:28},
      { name: "Matt", age:31}
    ]
  }); 

  const [otherState, setOtherState] = useState({
    otherState:"Some other value"
  })

  console.log(personsState, otherState)
  
  const switchNameHandler = () => {
    // console.log("Was Clicked!!!!!!!");
    setPersonsState({ 
      persons: [
      { name: "Joseph", age:28},
      { name: "Matt", age:39}
      ],
      otherState: personsState.otherState
    });
  };
  
  return (
    <div className="App">
      <hi>Hi, I'm a react app</hi>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} 
      />
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}> My hobbies: Running </Person>
    </div>    
  );

};
//state = {
//  persons: [
//    { name: "Joe", age:"28"},
//    { name: "Matt", age:"31"}
//  ],
//  otherState: "Some other value"
//};  

// Makes the App class default when importing it somewhere else
export default App;
