import React from 'react';
import Input from './Input';
import './MemeInput.css';
import PropTypes from 'prop-types';

function MemeInput({ onChange, onUrlClick, memeState }) {
  return (
    <>
      <form onSubmit={onUrlClick}>
        <Input name="url" button={true} onUrlClick={onUrlClick} onChange={onChange}/>
        <Input name="header" colorPicker="headerColor" value={memeState.header} onChange={onChange}/>
        <Input name="footer" colorPicker="footerColor" value={memeState.footer} onChange={onChange}/>
      </form>
    </>
  );
}

MemeInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  memeState: PropTypes.object.isRequired,
  onUrlClick: PropTypes.func,
};

export default MemeInput;
