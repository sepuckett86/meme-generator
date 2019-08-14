import React from 'react';
import styles from './Input.css';
import PropTypes from 'prop-types';

function Input({ name, colorPicker, button }) {
  return (
    <>
    <label>
      {name}<input className={styles.textInput} type="text"></input>
      {colorPicker ? <input type="color"></input> : null}
      {button ? <button>Submit</button> : null}
    </label>
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  colorPicker: PropTypes.boolean,
  button: PropTypes.boolean
};

export default Input;

