import React, {useContext} from 'react'
import styles from './Favorite.module.scss'
import FavoriteCards from './FavoriteCards/FavoriteCards'
import {useSelector} from 'react-redux'
import UserContext from '../../services/userContext'
// import useUser from '../../hooks/useUser'

const Favorite = () => {
    // const {name} = useUser()
    const {name} = useContext(UserContext)
    const favoriteAmount = useSelector(state => state.favorite.length);
    return (
        <div className={styles.Favorite}>
           <h3>{name} Favorite ({favoriteAmount})</h3> 
           <FavoriteCards />
        </div>
    )
}

export default Favorite
