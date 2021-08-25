import React from 'react'
import styles from './FavoriteCard.module.scss'
import { useDispatch } from 'react-redux'
import { removeFavoriteJokeAction } from '../../../store/favorites/actions'

const FavoriteCard = ({ favoriteCard, dragStart, dragEnd, dragOver, drop }) => {
    const dispatch = useDispatch();
    const handleLike = () => {
        dispatch(removeFavoriteJokeAction(favoriteCard.id));            
    }
    return (
        <li 
            className={styles.FavoriteCard}
            onDragStart={e => dragStart(e, favoriteCard)}
            onDragLeave={e => dragEnd(e)}
            onDragEnd={e => dragEnd(e)}
            onDragOver={e => dragOver(e)}
            onDrop={e => drop(e, favoriteCard)}
            draggable={true}
        >
            <div className={styles.Like}>
                <i className="fas fa-heart" onClick={handleLike}/>
            </div>
            <div className={styles.CardMain}>
                    <div className={styles.CardMainIcon}>
                        <i className="far fa-comment-alt"></i>
                    </div>
                    <div className={styles.CardContentText}>
                        <p className={styles.CardContentTextId}>{favoriteCard.id}</p>
                        <p className={styles.CardContentTextJoke}>{favoriteCard.value}</p>
                        <p className={styles.CardContentTime}>Last update: {favoriteCard.updated_at} </p>
                    </div>
            </div>
        </li>
    )
}

export default FavoriteCard;
