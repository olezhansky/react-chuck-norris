import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr';
import styles from './Favorite.module.scss'
import {useSelector} from 'react-redux'
import FavoriteCards from '../../components/FavoriteCards/FavoriteCards';
import FavoriteButton from '../../components/UI/FavoriteButton/FavoriteButton';

const Favorite = () => {
    const favoriteAmount = useSelector(state => state.favorite.length);
    const [toggle, setToggle] = useState(false);

    const handleToggleFavoriteButton = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <div className={toggle ? styles.FavoriteShow : styles.Favorite}>
                <h3 className={styles.FavoriteTitle}>Favorite {favoriteAmount !== 0 && `(${favoriteAmount})`}</h3> 
                <p className={styles.FavoriteText}>Drag-end-drop*</p>
                <FavoriteCards />
                <div 
                    className={styles.FavoriteClose}
                    onClick={handleToggleFavoriteButton}
                ><GrClose style={{fontSize: '25px'}}/></div>
            </div>
            <FavoriteButton toggleFavoriteButton={handleToggleFavoriteButton}/>
        </>
    )
}

export default Favorite
