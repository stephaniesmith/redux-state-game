import React, { Component } from 'react';
import Board from './Board';
import Result from './Result';

export default class Game extends Component {

  render() {
    
    return (
      <div>
        This is our Game!
        <Board/>
        <Result/>
      </div>
    );
  }
}
