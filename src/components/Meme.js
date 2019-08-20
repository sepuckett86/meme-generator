import React from 'react';
import styles from './Meme.css';
import PropTypes from 'prop-types';

function Meme({ meme }) {
  const backgroundImage = {
    backgroundImage: `url('${meme.displayedImage}')`
  };

  const headerColor = {
    color: meme.headerColor
  };

  const footerColor = {
    color: meme.footerColor
  };

  return (
    <>
      <div id="meme" className={styles.meme} style={backgroundImage}>
        <p className={styles.top} style={headerColor}>{meme.header}</p>
        <p className={styles.bottom} style={footerColor}>{meme.footer}</p>
      </div>
    </>
  );
}

Meme.propTypes = {
  meme: PropTypes.object.isRequired
};

export default Meme;
