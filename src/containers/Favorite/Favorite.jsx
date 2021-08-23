import React from 'react'
import styles from './Favorite.module.scss'
import {useSelector} from 'react-redux'
import FavoriteCards from '../../components/FavoriteCards/FavoriteCards';

const Favorite = () => {
    const favoriteAmount = useSelector(state => state.favorite.length);
    return (
        <div className={styles.Favorite}>
           <h3>Favorite {favoriteAmount !== 0 && `(${favoriteAmount})`}</h3> 
           <FavoriteCards />
        </div>
    )
}

export default Favorite
