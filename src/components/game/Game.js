import React, { Component } from 'react';
import Board from './Board';

export default class Game extends Component {

  // state = {
  //   player: 'X'
  // };

  render() {
    // const { player } = this.state;
    
    return (
      <div>
        This is our Game!
        <Board/>
      </div>
    );
  }
}
