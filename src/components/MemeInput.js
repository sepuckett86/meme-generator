import React from 'react';
import './MemeInput.css';
import PropTypes from 'prop-types';

function MemeInput({ handleChange, handleUpload, handleClickUpdateImage, meme }) {
  return (
    <>
      <h3>Upload an image or a url</h3>
      <label>
        <input name="url" type="text" onChange={handleChange} value={meme.url}/>
        <button name="url" onClick={handleClickUpdateImage}>Use it!</button>
      </label>
      <input name="uploadedImage" type="file" onChange={handleUpload}></input>
      <button name="uploadedImage" onClick={handleClickUpdateImage}>Use it!</button>
      <h3>Add some text</h3>
      <label>
        Header
        <input name="header" value={meme.header} onChange={handleChange}/>
        <input name="headerColor" type="color" value={meme.headerColor} onChange={handleChange}></input>
      </label>
      <label>
        Footer
        <input name="footer" value={meme.footer} onChange={handleChange}/>
        <input name="footerColor" type="color" value={meme.footerColor} onChange={handleChange}></input>
      </label>
    </>
  );
}

MemeInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  meme: PropTypes.object.isRequired,
  handleClickUpdateImage: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired,
};

export default MemeInput;
