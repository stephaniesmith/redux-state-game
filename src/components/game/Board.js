import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Square from './Square';
import { getBoard, getPlayer } from './reducers';
import { makeSelection } from './actions';

class Board extends Component {

  static propTypes = {
    // index: PropTypes.number,
    player: PropTypes.string.isRequired,
    board: PropTypes.array.isRequired
  };

  callSquare = event => {
    event.preventDefault();
    const { player } = this.props;
    const index = event.target.value;
    this.props.makeSelection(index, player);
    // return  player === 'X'  ? { player: 'O' } : { player: 'X' };
  };

  render() {
    const { player, board } = this.props;
    console.log('BOARD!!', board);

    return (
      <div>
        {board.map((square, index) => <Square
          key={index}
          label={square}
          selectSquare={this.callSquare}
          value={index}
        />)}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    board: getBoard(state),
    player: getPlayer(state)
  }),
  { makeSelection }
)(Board);