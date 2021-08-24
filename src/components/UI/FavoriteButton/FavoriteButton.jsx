import React from 'react';
import { MdFavorite } from 'react-icons/md';
import styles from './FavoriteButton.module.scss';

const FavoriteButton = ({toggleFavoriteButton}) => {
    return (
        <div 
            className={styles.FavoriteButton}
            onClick={toggleFavoriteButton}
        ><MdFavorite style={{color: 'lightblue', fontSize: '50px'}}/></div>
    )
}

export default FavoriteButton;