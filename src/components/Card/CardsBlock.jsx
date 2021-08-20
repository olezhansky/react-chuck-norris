// import React from 'react'
// import { useSelector } from 'react-redux'
// import Card from './Card'
// import noJokes from '../../assets/img/noJokes.png';
// import styles from './Card.module.scss'

// const CardsBlock = () => {
//     const jokes = useSelector(state => state.jokes)

//     const jokesList = jokes.map(joke =>(
//         <Card joke={joke} key={joke.id}/>
//     ))
    
//     return (
//         <div className={styles.card_block}>
//             {jokes.length ? (<ul className={styles.card_block_ul}>{jokesList}</ul>)
//             : (<div>
//                 <img src={noJokes} alt={noJokes}/>
//             </div>)
//             }  
//         </div>
//     )
// }

// export default CardsBlock;

import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import noJokes from '../../assets/img/noJokes.png';
import styles from './Card.module.scss'
import Pagination from '../Pagination/Pagination';

const CardsBlock = () => {
    const jokes = useSelector(state => state.jokes.jokes)
    const currentPage = useSelector(state => state.jokes.currentPage)
    const jokesPerPage = useSelector(state => state.jokes.jokesPerPage)

    console.log(jokes);
    const lastJokesIndex = currentPage * jokesPerPage;
    const firstJokesIndex = lastJokesIndex - jokesPerPage;
    // const currentJokes = (
    //     jokes.slice(firstJokesIndex, lastJokesIndex)
    // );

    return (
        <>
            {jokes.length !== 0 ? 
                <ul className={styles.card_block}>
                    {jokes.map((joke) => (
                        <Card joke={joke} key={joke.id}/> 
                    ))}
                </ul> : 
                <div className={styles.img_block}>
                    <img src={noJokes} alt={noJokes}/>
                </div>
            }
            {/* <Pagination  
                currentPage={currentPage}
                jokesPerPage={jokesPerPage}
                totalJokes={jokes.length}
            /> */}
        </>
    )
}

export default CardsBlock;



