import React, {useEffect, useRef, useState} from 'react'
import styles from './InputSearch.module.scss'



const InputSearch = ({onQuery}) => {

    // const [value, setValue] = useState('')

    const inputEl = useRef(null)    
    useEffect(() => {        
         inputEl.current.focus();       
     }, [])

     const onChange = (event) => {
         console.log(event);
         onQuery(event)
     }

    return (
        <div className={styles.Wrapper}>
            <input 
                className={styles.input}
                onChange={event => onChange(event.target.value)}
                ref={inputEl} 
                type="text"
                placeholder="Free text search"                 
            />                        
        </div>
    )
}

export default InputSearch
