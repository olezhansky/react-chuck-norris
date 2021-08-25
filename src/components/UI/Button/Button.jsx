import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({onClick}) => (
  <button
    type="button"
    className={styles.Button}
    onClick={onClick}
  >
    Get a joke
  </button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Button;
