import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './FavoriteCard.module.scss';
import { removeFavoriteJokeAction } from '../../../store/favorites/actions';

// eslint-disable-next-line object-curly-newline
const FavoriteCard = ({ favoriteCard, dragStart, dragEnd, dragOver, drop }) => {
  const dispatch = useDispatch();
  const handleLike = () => {
    dispatch(removeFavoriteJokeAction(favoriteCard.id));
  };

  const [favoriteCardTimeout, setFavoriteCardTimeout] = React.useState(null);

  useEffect(() => {
    setTimeout(() => {
      setFavoriteCardTimeout({ favoriteCard });
    }, 400);
  }, [favoriteCard]);

  return (
    <li
      id={`favorite${favoriteCard.id}`}
      className={styles.FavoriteCard}
      onDragStart={(e) => dragStart(e, favoriteCard)}
      onDragLeave={(e) => dragEnd(e)}
      onDragEnd={(e) => dragEnd(e)}
      onDragOver={(e) => dragOver(e)}
      onDrop={(e) => drop(e, favoriteCard)}
      draggable
    >
      {favoriteCardTimeout?.favoriteCard.id && (
        <>
          <div className={styles.Like}>
            <i
              className="fas fa-heart"
              onClick={handleLike}
              role="presentation"
            />
          </div>
          <div className={styles.CardMain}>
            <div className={styles.CardMainIcon}>
              <i className="far fa-comment-alt" />
            </div>
            <div className={styles.CardContentText}>
              <p className={styles.CardContentTextId}>{favoriteCard.id}</p>
              <p className={styles.CardContentTextJoke}>{favoriteCard.value}</p>
              <p className={styles.CardContentTime}>
                Last update:
                {favoriteCard.updated_at}
              </p>
            </div>
          </div>
        </>
      )}
    </li>
  );
};

FavoriteCard.propTypes = {
  favoriteCard: PropTypes.objectOf.isRequired,
  dragStart: PropTypes.func.isRequired,
  dragEnd: PropTypes.func.isRequired,
  dragOver: PropTypes.func.isRequired,
  drop: PropTypes.func.isRequired,
};

export default FavoriteCard;
