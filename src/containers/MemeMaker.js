import React, { Component } from 'react';
import Meme from '../components/Meme';
import MemeInput from '../components/MemeInput';
import styles from './MemeMaker.css';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

export default class MemeMaker extends Component {
  state = {
    url: '',
    uploadedImage: '',
    header: '',
    footer: '',
    headerColor: '#000000',
    footerColor: '#000000',
    displayedImage: 'https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleClickUpdateImage = ({ target }) => {
    this.setState({ displayedImage: this.state[target.name] });
  }

  handleUpload = ({ target }) => {
    this.setState({ uploadedImage: window.URL.createObjectURL(target.files[0]) });
  }

  exportMeme = () => {
    domtoimage.toBlob(document.getElementById('meme'))
      .then(function(blob) {
        FileSaver.saveAs(blob, 'my-node.png');
      });
  }

  render() {
    return (
      <section className={styles.MemeMaker}>
        <div>
          <MemeInput 
            handleChange={this.handleChange} 
            handleUpload={this.handleUpload} 
            handleClickUpdateImage={this.handleClickUpdateImage} 
            meme={this.state}
            exportMeme={this.exportMeme}
          />
        </div>
        <div>
          <Meme meme={this.state}/>
        </div>
      </section>
    );
  }
}
