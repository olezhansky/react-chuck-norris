import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputRadio.module.scss';

const InputRadio = ({
    onChange, currentId, id, name, label
}) => (
  <div className={styles.radioWrapper}>
    <input className={styles.radioInput} onChange={() => onChange(id)} checked={id === currentId} type="radio" id={id} name={name} />
    <label className={styles.radioLabel} htmlFor={id}>{label}</label>
  </div>
);

InputRadio.propTypes = {
    onChange: PropTypes.func.isRequired,
    currentId: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
};

InputRadio.defaultProps = {
    currentId: '',
    id: '',
    name: '',
    label: '',
  };

export default InputRadio;
