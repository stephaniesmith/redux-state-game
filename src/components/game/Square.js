import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Square.css';

export default class Square extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    selectSquare: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
  };

  render() {
    const { label, selectSquare, value, disable } = this.props;

    return (
      <button className={styles.square} value={value} onClick={selectSquare}>
        {label}
      </button>
    );
  }
}