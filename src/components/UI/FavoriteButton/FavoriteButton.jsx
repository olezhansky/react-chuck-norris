import React from 'react';
import { MdFavorite } from 'react-icons/md';
import PropTypes from 'prop-types';
import styles from './FavoriteButton.module.scss';

const FavoriteButton = ({toggleFavoriteButton}) => (
  <button
    type="button"
    className={styles.FavoriteButton}
    onClick={toggleFavoriteButton}
  >
    <MdFavorite style={{color: 'lightblue', fontSize: '50px'}} />
  </button>
);

FavoriteButton.propTypes = {
    toggleFavoriteButton: PropTypes.func.isRequired
};

export default FavoriteButton;