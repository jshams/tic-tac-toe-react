import React, { Component } from 'react';
import Title from './Title'
import Game from './Game'

class App extends Component {
  render() {
    // const name = "John Smith"
    return (
      <div>
        <Title name="Jordan" date="01/12/2016" />
        <Title name="Bobby" date="03/30/2006" />
        <Title name="Maxwell" date="06/22/2014" />
        <Game />
      </div>
    );
  }
}

export default App;
