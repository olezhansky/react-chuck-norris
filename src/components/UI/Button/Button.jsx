import React from 'react'
import styles from './Button.module.scss'

const Button = ({onClick}) => {
    return (
        <button 
            className={styles.Button}
            onClick={onClick}
        >
            Get a joke
        </button>
    )
}

export default Button
