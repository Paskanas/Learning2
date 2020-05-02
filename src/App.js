import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    humans: [
      { name: "Kasparas", age: 27 },
      { name: "Greta", age: 25 },
      { name: "Manu", age: 28 },
    ],
  });

  const [otherState, setOtherState] = useState({
    otherState: "some other value",
  });

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Clicked !');
    setPersonsState({
      humans: [
        { name: "Kasparas senis", age: 40 },
        { name: "Greta mergaite", age: 16 },
        { name: "Manu", age: 1 },
      ],
      otherState: personsState.otherState,
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p1>This is realy working! </p1>
      <div></div>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personsState.humans[0].name}
        age={personsState.humans[0].age}
      />
      <Person
        name={personsState.humans[1].name}
        age={personsState.humans[1].age}
      >
        My hobbie is learning react{" "}
      </Person>
      <Person
        name={personsState.humans[2].name}
        age={personsState.humans[2].age}
      />
      <Person />
    </div>
  );
  //return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Does it work now?'));
};

export default app;
