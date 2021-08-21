import React from 'react'
import styles from './Favorite.module.scss'
import FavoriteCards from './FavoriteCards/FavoriteCards'
import {useSelector} from 'react-redux'

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
