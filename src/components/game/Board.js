import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {
  render() {
    return (
      <div>
        <div><Square/><Square/><Square/></div>
        <div><Square/><Square/><Square/></div>
        <div><Square/><Square/><Square/></div>
      </div>
    );
  }
}