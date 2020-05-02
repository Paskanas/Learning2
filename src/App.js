import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    humans: [
      {name: 'Kasparas', age: 27},
      {name: 'Greta', age: 25},
      {name: 'Manu', age: 28}
    ]
  }
  
  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React app</h1>
       <p1>This is realy working! </p1>
       <div></div>
       <button>Switch name</button>
       <Person name={this.state.humans[0].name} age={this.state.humans[0].age}/>
       <Person name={this.state.humans[1].name} age={this.state.humans[1].age}>My hobbie is learning react </Person>
       <Person name={this.state.humans[2].name} age={this.state.humans[2].age}/>
       <Person/>
      </div>
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Does it work now?'));
  }
}

export default App;
