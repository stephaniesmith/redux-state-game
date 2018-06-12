import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Square from './Square';
import { getBoard } from './reducers';
import { makeSelection } from './actions';

class Board extends Component {

  static propTypes = {
    index: PropTypes.number,
    player: PropTypes.string.isRequired,
    board: PropTypes.array.isRequired
  };

  // state = {
  //   board: [' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ']
  // };

  callSquare = event => {
    event.preventDefault();
    const { player } = this.props;
    const index = event.target.value;
    makeSelection(index, player);
  };

  render() {
    const { player, board } = this.props;
    // const { board } = this.state;

    return (
      <div>
        {board.map((square, index) => <Square
          key={index}
          label={square}
          selectSquare={this.callSquare}
          value={index}
        />)}
        {/* <div><Square label={board[0]} selectSquare={this.callSquare}/><Square label={board[1]} selectSquare={this.callSquare}/><Square label={board[2]} selectSquare={this.callSquare}/></div>
        <div><Square label={board[3]} selectSquare={this.callSquare}/><Square label={board[4]} selectSquare={this.callSquare}/><Square label={board[5]} selectSquare={this.callSquare}/></div>
        <div><Square label={board[6]} selectSquare={this.callSquare}/><Square label={board[7]} selectSquare={this.callSquare}/><Square label={board[8]} selectSquare={this.callSquare}/></div> */}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    board: getBoard(state)
  }),
  { makeSelection }
)(Board);