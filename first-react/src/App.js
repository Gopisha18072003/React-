import { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
function App() {
  const [userState, changeUserState] = useState({ userName: 'Gopishaw' });
  const chageUserNameHandler = (event) => {

    changeUserState({ userName: event.target.value });

  }
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Gopi", age: 20 },
      { name: "Karan", age: 21 },
      { name: "Raj", age: 22 },
    ],
    //otherState: 'some other value'
    showPerson: false
  });
  const showPersonHandler = () => {
    const doesShowperson = personsState.showPerson;
    setPersonsState({
      persons: [
        { name: "Gopi", age: 20 },
        { name: "Karan", age: 21 },
        { name: "Raj", age: 22 },
      ],
      //otherState: 'some other value'
      showPerson: !doesShowperson
    })
  }
  const [otherState, setOtherState] = useState("some other value");
  // const switchNameHandler = (name) => {
  //   // nesting of functions
  //   const doesShowperson = personsState.showPerson;
  //   setPersonsState({
  //     persons: [
  //       { name: "Gopi Shaw", age: 20 },
  //       { name: name, age: 21 },
  //       { name: "Rajkumar", age: 23 },
  //     ],
  //     showPerson: doesShowperson
  //   });
  // };

  const changeNameHandler = (event) => {
    setPersonsState({
      persons: [
        { id: 'p1',name: "Gopi", age: 20 },
        { id: 'p2',name: event.target.value, age: 21 },
        { id: 'p3',name: "Raj", age: 22 },
      ],
    });
  };

  // Inline Styles
  const styles = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '2px solid blue',
    padding: '9px',
    cursor: 'pointer'
  };

  const deletePersonHandler = (personIndex) => {
    const remainingPersons = [...personsState.persons];
    const showPersonCopy = personsState.showPerson;
    remainingPersons.splice(personIndex, 1);
    setPersonsState({ persons: remainingPersons, showPerson: showPersonCopy});

  }

  let person = null;
  if (personsState.showPerson) {
    person = (
      <div>
        {
          personsState.persons.map((person, index) => {
          return<Person 
          click={() => deletePersonHandler(index)}
          name={person.name} 
          age={person.age} 
          key={person.id}
          />
          })
        }
      </div>


      // <div>
      //   <Person
      //     name={personsState.persons[0].name}
      //     age={personsState.persons[0].age}
      //   />
      //   <Person
      //     name={personsState.persons[1].name}
      //     age={personsState.persons[1].age}
      //     click={switchNameHandler.bind(this, "Arun Kumar!!")}
      //     change={changeNameHandler}
      //   >
      //     My Hobbies: Reading{" "}
      //   </Person>
      //   <Person
      //     name={personsState.persons[2].name}
      //     age={personsState.persons[2].age}
      //   ></Person>
      //   </div>
    );
  }

  return (
    <div className="App">
      <h1>Hi, I am a React app</h1>
      <p>This is the first react app</p>
      {/* <button onClick={switchNameHandler.bind(this, "Arun!!!!")}
        style={styles}
      >
        Switch Data
      </button> */}
      <br></br>
      <button onClick={showPersonHandler}>Show Persons</button>
      {/* conditional statement */}
      {/* {
        personsState.showPerson ?
        <div>
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          click={switchNameHandler.bind(this, "Arun Kumar!!")}
          change={changeNameHandler}
        >
          My Hobbies: Reading{" "}
        </Person>
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
        ></Person>
        </div> : null 
      } */}



      {/* <UserInput change={chageUserNameHandler} default={userState.userName}/>
    <UserOutput userName={userState.userName}/> */}

      {person}
    </div>
  );
}

export default App;
