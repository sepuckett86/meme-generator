import React from 'react';
import styles from './Input.css';
import PropTypes from 'prop-types';

function Input({ name, colorPicker, button, onChange, onUrlClick }) {
  return (
    <>
    <label>
      {name}<input className={styles.textInput} type="text" name={name} onChange={onChange}></input>
      {colorPicker ? <input type="color" name={colorPicker} onChange={onChange}></input> : null}
      {button ? <button onClick={onUrlClick}>Submit</button> : null}
    </label>
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  colorPicker: PropTypes.string,
  button: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onUrlClick: PropTypes.func
};

export default Input;

