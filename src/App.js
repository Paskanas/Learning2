import React, { /*useState,*/ Component } from "react";
import "./App.css";
import Person from "./Person/Person";

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

  nameChangeHandler = (event) => {
    this.setState({
      humans: [
        { name: "Kasparas", age: 10 },
        { name: event.target.value, age: 11 },
        { name: "Manu", age: 12 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "yellow",
      font: "inherit",
      border: "2px solid blue",
      padding: "10px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is realy working! </p>
        <div></div>
        <button
          onClick={() => this.switchNameHandler("Kasparas sens")}
          style={style}
        >
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
          changed={this.nameChangeHandler}
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
