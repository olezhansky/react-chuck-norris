import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Portal } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FavoriteCard from './FavoriteCard/FavoriteCard';
import FlyComponent from '../FlyComponent/FlyComponent';
import styles from './FavoriteCards.module.scss';
import { favoriteCardChangeOrderAction } from '../../store/favorites/actions';

const FavoriteCards = () => {
  const favoriteCards = useSelector((state) => state.favorite);
  const newFavoriteJoke = useSelector((state) => state.jokes.newJoke);

  const desktopMatch = useMediaQuery('(min-width: 768px)');

  const [currentFavoriteCard, setCurrentFavoriteCard] = useState(null);
  const dispatch = useDispatch();

  const dragStartHandler = (e, favoriteCard) => {
    setCurrentFavoriteCard(favoriteCard);
  };
  const dragEndHandler = (e) => {
    e.target.style.background = 'white';
  };
  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.background = 'grey';
  };
  const dropHandler = (e, favoriteCard) => {
    e.preventDefault();
    dispatch(favoriteCardChangeOrderAction(favoriteCard, currentFavoriteCard));
    e.target.style.background = 'white';
  };
  const sortFavorites = (a, b) => {
    if (a.order > b.order) {
      return 1;
    }
    return -1;
  };

  return (
    <>
      <ul className={styles.FavoriteCards}>
        {favoriteCards.sort(sortFavorites).map((favoriteCard) => (
          <FavoriteCard
            favoriteCard={favoriteCard}
            key={favoriteCard?.id}
            dragStart={dragStartHandler}
            dragEnd={dragEndHandler}
            dragOver={dragOverHandler}
            drop={dropHandler}
          />
        ))}
      </ul>
      <Portal container={document.getElementById('root')}>
        {newFavoriteJoke && desktopMatch && (
          <FlyComponent newFavoriteJoke={newFavoriteJoke} />
        )}
      </Portal>
    </>
  );
};

export default FavoriteCards;
