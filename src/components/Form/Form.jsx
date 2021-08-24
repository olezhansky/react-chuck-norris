import React, { useState } from 'react'
import Categories from '../Categories/Categories'
import Button from '../UI/Button/Button'
import InputRadio from '../UI/InputRadio/InputRadio'
import InputSearch from '../UI/InputSearch/InputSearch'
import styles from './Form.modules.scss'



const Form = ({onClick, onCategoryChange, onQueryChange, clearState}) => {

    const onSubmit = (event) => {
        event.preventDefault()
    }
    const [check, setCheck ] = useState('random')
    
    const handleChange = (id)=> {
        setCheck(id)
        clearState()
        
    }
    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <InputRadio onChange={handleChange} currentId={check} id="random" name="options" label="Random"/>
            <InputRadio onChange={handleChange} currentId={check} id="categories" name="options" label="Form categories" />            
             {check ==='categories' && <Categories onSelect={onCategoryChange}/>}              
            <InputRadio onChange={handleChange} currentId={check} id="search" name="options" label="Search"/>
            {check ==='search' && (
                <InputSearch onQuery={onQueryChange}/>
            )}
            <Button onClick={onClick}/>
        </form>
    )
}

export default Form