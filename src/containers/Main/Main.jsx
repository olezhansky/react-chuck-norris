import React, { useEffect, useState }from 'react'
import Header from '../../components/Header/Header'
import Form from '../../components/Form/Form'
import styles from './Main.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { clearJokesAction, currentPageAction, fetchJokes } from '../../store/jokes/actions'
import Pagination from '../../components/Pagination/Pagination'
import noJokes from '../../assets/img/noJokes.png';
import CardsBlock from '../../components/CardsBlock/CardsBlock'
import Loader from '../../components/UI/Loader/Loader';


const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [query, setQuery] = useState(null)
    const dispatch = useDispatch()  

    useEffect(() => {
        dispatch(fetchJokes())
    }, [dispatch])

    const clearState = () => {
        console.log("Clear state");
        setSelectedCategory('');
        setQuery("");
    }
    const handleGetJoke = () => {
        dispatch(clearJokesAction())
        dispatch(fetchJokes(selectedCategory, query))
        dispatch(currentPageAction());
    }
    
    const handleCategoryChange = category => {
        setSelectedCategory(category)        
    }
    const handleQueryChange = query => {
        setSelectedCategory('')
        setQuery(query)
    }

    const jokes = useSelector(state => state.jokes.jokes);
    const currentPage = useSelector(state => state.jokes.currentPage);
    const jokesPerPage = useSelector(state => state.jokes.jokesPerPage);
    const isLoading = useSelector(state => state.jokes.isLoading);
    const lastJokesIndex = currentPage * jokesPerPage;
    const firstJokesIndex = lastJokesIndex - jokesPerPage;
    const currentJokes = (
        jokes.slice(firstJokesIndex, lastJokesIndex)
    );

    return (
        <div className={styles.Main}>
            <Header />
            <h2 className={styles.Title}>Hey!</h2>
            <p className={styles.Text}>Let's try to find a joke for you:</p>
            <Form clearState={clearState} onClick={handleGetJoke} onCategoryChange={handleCategoryChange} onQueryChange={handleQueryChange} />
            <div className={styles.CardsBlock}>
                {jokes.length ? <CardsBlock jokes={currentJokes}/>
                 : isLoading ? <div className={styles.Loader}><Loader /></div> 
                 : <div className={styles.ImgBlock}><img src={noJokes} alt={noJokes}/></div>}
            </div>
            {jokes.length > 1 && <Pagination  
                currentPage={currentPage}
                jokesPerPage={jokesPerPage}
                totalJokes={jokes.length}
            />}
        </div>
    )
}

export default Main;