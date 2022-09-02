import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlyFavoriteCard.module.scss';

const FlyFavoriteCard = ({ newFavoriteJoke }) => (
  <li className={styles.FlyFavoriteCard}>
    <div className={styles.Like}>
      <i className="fas fa-heart" />
    </div>
    <div className={styles.CardMain}>
      <div className={styles.CardMainIcon}>
        <i className="far fa-comment-alt" />
      </div>
      <div className={styles.CardContentText}>
        <p className={styles.CardContentTextId}>{newFavoriteJoke.id}</p>
        <p className={styles.CardContentTextJoke}>{newFavoriteJoke.value}</p>
        <p className={styles.CardContentTime}>
          Last update:
          {newFavoriteJoke.updated_at}
        </p>
      </div>
    </div>
  </li>
);

FlyFavoriteCard.propTypes = {
  newFavoriteJoke: PropTypes.objectOf.isRequired,
};

export default FlyFavoriteCard;
