import React from 'react';
import classNames from 'classnames';
import './Card.scss';
import PropTypes from 'prop-types';
import { RiMessage2Line } from 'react-icons/ri';
import {useDispatch, useSelector} from 'react-redux';
import { addFavoriteJokeAction, removeFavoriteJokeAction } from '../../../store/favorites/actions';
import LikeButtonIcon from '../../../assets/icons/LikeButtonIcon';

const Card = ({joke}) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorite);
    
    const isFavorite = favorites.some((elem) => elem.id === joke.id);
    
    const handleLike = () => {
        if (isFavorite) {
            dispatch(removeFavoriteJokeAction(joke.id));
        } else {
            dispatch(addFavoriteJokeAction(joke));
        }
    };

    if (!joke) return null;

    return (
      <li className="card__item">
        <button type="button" className="card-btn__like" onClick={handleLike}>
          <LikeButtonIcon fill={isFavorite ? 'red' : ''} />
          <span className="card-btn__heard">Add to favorite</span>
        </button>
        <div className="card-btn__wrap">
          <RiMessage2Line style={{fontSize: '24px', color: 'grey'}} />
          <div className="card__content">
            <span className="card__id-field">
              ID:
              <a className="card__id-link" href={joke.id} target="_blank" rel="noreferrer">{joke.id}</a>
            </span>
            <p className={classNames('card__text', { favorite: isFavorite })}>{joke.value}</p>
            <span className="card__last-update">
              Last update
              {' '}
              {joke.updated_at}
            </span>
          </div>
          <div>
            <img src={joke.icon_url} alt="img" />
          </div>
        </div>
      </li>
    );
};

Card.propTypes = {
    joke: PropTypes.objectOf.isRequired
};

export default Card;
