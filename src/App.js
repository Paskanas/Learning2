import React, { /*useState,*/ Component } from "react";
import "./App.css";
import Person from "./Person/Person";

//hooks exaple!!
/*const app = (props) => {
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

  const switchNameHandler = (newName) => {
    // console.log('Clicked !');
    setPersonsState({
      humans: [
        { name: newName, age: 40 },
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
      <button onClick={() => switchNameHandler("Kasparas sens")}>
        Switch name
      </button>
      <Person
        name={personsState.humans[0].name}
        age={personsState.humans[0].age}
      />
      <Person
        name={personsState.humans[1].name}
        age={personsState.humans[1].age}
        click={switchNameHandler.bind(this, "Kasparas jauns")}
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
};*/

class App extends Component {
  state = {
    humans: [
      { name: "Kasparas", age: 27 },
      { name: "Greta", age: 25 },
      { name: "Manu", age: 28 },
    ],
  };

  switchNameHandler = (newName) => {
    // console.log('Clicked !');
    this.setState({
      humans: [
        { name: newName, age: 40 },
        { name: "Greta mergaite", age: 16 },
        { name: "Manu", age: 1 },
      ],
      otherState: this.state.otherState,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p1>This is realy working! </p1>
        <div></div>
        <button onClick={() => this.switchNameHandler("Kasparas sens")}>
          Switch name
        </button>
        <Person
          name={this.state.humans[0].name}
          age={this.state.humans[0].age}
        />
        <Person
          name={this.state.humans[1].name}
          age={this.state.humans[1].age}
          click={this.switchNameHandler.bind(this, "Kasparas jauns")}
        >
          My hobbie is learning react{" "}
        </Person>
        <Person
          name={this.state.humans[2].name}
          age={this.state.humans[2].age}
        />
        <Person />
      </div>
    );
  }
  //return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Does it work now?'));
}

export default App;
