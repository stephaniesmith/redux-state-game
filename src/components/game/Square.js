import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Square.css';

export default class Square extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
  };


  render() {
    const { label } = this.props;

    return (
      <button className={styles.square}>
        {label}
      </button>
    );
  }
}