import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardsBlock.module.scss';
import Card from './Card/Card';

const Cards = ({ jokes }) => {
  if (!jokes) return null;
  return (
    <>
      <ul className={styles.card_block}>
        {jokes.map((joke) => (
          <Card joke={joke} key={joke.id} />
        ))}
      </ul>
    </>
  );
};

Cards.propTypes = {
  jokes: PropTypes.arrayOf.isRequired,
};

export default Cards;
