import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Square from './Square';
import { makeSelection } from './actions';

export default class Board extends Component {

  static propTypes = {
    index: PropTypes.number,
    player: PropTypes.string.isRequired
  };

  state = {
    board: [' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ']
  };



  render() {
    const { player } = this.props;
    const { board } = this.state;

    return (
      <div>
        <div><Square label={board[0]}/><Square label={board[1]}/><Square label={board[2]}/></div>
        <div><Square label={board[3]}/><Square label={board[4]}/><Square label={board[5]}/></div>
        <div><Square label={board[6]}/><Square label={board[7]}/><Square label={board[8]}/></div>
      </div>
    );
  }
}