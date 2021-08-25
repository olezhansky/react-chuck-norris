import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './InputSearch.module.scss';

const InputSearch = ({onQuery}) => {
    const inputEl = useRef(null);

    useEffect(() => {
         inputEl.current.focus();
     }, []);

    const onChange = (event) => {
        onQuery(event);
    };

    return (
      <div className={styles.Wrapper}>
        <input
          className={styles.input}
          onChange={(event) => onChange(event.target.value)}
          ref={inputEl}
          type="text"
          placeholder="Free text search"
        />
      </div>
    );
};

InputSearch.propTypes = {
    onQuery: PropTypes.func.isRequired
};

export default InputSearch;
