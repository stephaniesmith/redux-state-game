import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Square from './Square';
import { getBoard, getPlayer, getRoundState, getDisable } from './reducers';
import { makeSelection } from './actions';
import styles from './Board.css';

class Board extends Component {

  static propTypes = {
    board: PropTypes.array.isRequired,
    makeSelection: PropTypes.func.isRequired,
    disable: PropTypes.array.isRequired
  };

  callSquare = event => {
    event.preventDefault();
    const { player } = this.props;
    const index = event.target.value;
    // event.target.disabled = true;
    this.props.makeSelection(index, player);
  };

  render() {
    const { board, disable } = this.props;

    return (
      <div>
        <div className={styles.board}>
          {board.map((square, index) => <Square
            key={index}
            label={square}
            selectSquare={this.callSquare}
            value={index}
            disabled={disable[index]}
          />)}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    board: getBoard(state),
    player: getPlayer(state),
    roundState: getRoundState(state),
    disable: getDisable(state)
  }),
  { makeSelection }
)(Board);