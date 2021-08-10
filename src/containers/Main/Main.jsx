import React, { useEffect, useState }from 'react'
import Header from '../../components/Header/Header'
import Form from '../../components/Form/Form'
import CardsBlock from '../../components/Card/CardsBlock'
import getJoke from '../../api/getJokes'
import styles from './Main.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJokes } from '../../store/jokes/actions'


const Main = props => {
    // const [jokes, setJoke] = useState('');
    // const jokes = useSelector(state => state.jokes)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [query, setQuery] = useState(null)

    const dispatch = useDispatch()  

    useEffect(() => {
        dispatch(fetchJokes())
    }, [])

    const clearState = () => {
        console.log("Clear state");
        setSelectedCategory('');
        setQuery("");
    }
    const handleGetJoke = () => {
        dispatch(fetchJokes(selectedCategory, query))
    }
    
    const handleCategoryChange = category => {
        setSelectedCategory(category)        
    }
    const handleQueryChange = query => {
        setSelectedCategory('')
        setQuery(query)
    }

    return (
        <div className={styles.Main}>
            <Header />
            <h2 className={styles.Title}>Hey!</h2>
            <p className={styles.Text}>Let's try to find a joke for you:</p>
            <Form clearState={clearState} onClick={handleGetJoke} onCategoryChange={handleCategoryChange} onQueryChange={handleQueryChange} />
            <CardsBlock />
        </div>
    )
}

export default Main