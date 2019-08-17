import React from 'react';
import styles from './Meme.css';
import PropTypes from 'prop-types';

function Meme({ memeState }) {
  const backgroundImage = {
    backgroundImage: `url('${memeState.displayedUrl}')`
  };

  const headerColor = {
    color: memeState.headerColor
  };

  const footerColor = {
    color: memeState.footerColor
  };

  return (
    <>
      <div className={styles.meme} style={backgroundImage}>
        <p className={styles.top} style={headerColor}>{memeState.header}</p>
        <p className={styles.bottom} style={footerColor}>{memeState.footer}</p>
      </div>
    </>
  );
}

Meme.propTypes = {
  memeState: PropTypes.object.isRequired
};

export default Meme;
