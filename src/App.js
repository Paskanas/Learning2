import React, { /*useState,*/ Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    humans: [
      { id: "a1", name: "Kasparas", age: 27 },
      { id: "a2", name: "Greta", age: 25 },
      { id: "a3", name: "Manu", age: 28 },
    ],
    showHumans: false,
  };

  /*switchNameHandler = (newName) => {
    // console.log('Clicked !');
    this.setState({
      humans: [
        { name: newName, age: 40 },
        { name: "Greta mergaite", age: 16 },
        { name: "Manu", age: 1 },
      ],
      otherState: this.state.otherState,
    });
  };*/

  deleteHumanHandler = (humanIndex) => {
    //const humans = this.state.humans.slice(); //copy object, good practice
    const humans = [...this.state.humans]; //copy object, good practice
    humans.splice(humanIndex, 1);
    this.setState({ humans: humans });
  };

  nameChangeHandler = (event, id) => {
    const humanIndex = this.state.humans.findIndex((humanParameter) => {
      return humanParameter.id === id;
    });

    const human = {
      ...this.state.humans[humanIndex],
    };
    //const human = Object.assign({}, this.state.humans[humanIndex]); // alternative

    human.name = event.target.value;

    const humans = [...this.state.humans];
    humans[humanIndex] = human;

    this.setState({
      humans: humans,
    });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showHumans;
    this.setState({ showHumans: !doesShow });
  };
  render() {
    const style = {
      backgroundColor: "yellow",
      font: "inherit",
      border: "2px solid blue",
      padding: "10px",
      cursor: "pointer",
    };

    let humans = null;

    if (this.state.showHumans) {
      humans = (
        <div>
          {this.state.humans.map((human, index) => {
            return (
              <Person
                key={human.id}
                name={human.name}
                age={human.age}
                click={this.deleteHumanHandler.bind(index)}
                changed={(event) => this.nameChangeHandler(event, human.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is realy working! </p>
        <div></div>
        <button onClick={this.togglePersonsHandler} style={style}>
          Switch name
        </button>
        {humans}
      </div>
    );
  }
  //return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Does it work now?'));
}

export default App;
