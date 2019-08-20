import React, { Component } from 'react';
import Meme from '../components/Meme';
import MemeInput from '../components/MemeInput';
import styles from './MemeMaker.css';

export default class MemeMaker extends Component {
  state = {
    url: '',
    uploadedImage: '',
    header: '',
    footer: '',
    headerColor: '#000000',
    footerColor: '#000000',
    displayedImage: 'https://imgflip.com/s/meme/Satisfied-Seal.jpg'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleClickUpdateImage = ({ target }) => {
    this.setState({ displayedImage: this.state[target.name] });
  }

  handleUpload = ({ target }) => {
    console.log(target.files[0]);
    console.log(window.URL.createObjectURL(target.files[0]));
    this.setState({ uploadedImage: window.URL.createObjectURL(target.files[0]) });
  }

  render() {
    return (
      <section className={styles.MemeMaker}>
        <div>
          <MemeInput handleChange={this.handleChange} handleUpload={this.handleUpload} handleClickUpdateImage={this.handleClickUpdateImage} meme={this.state}/>
        </div>
        <div>
          <Meme meme={this.state}/>
        </div>
      </section>
    );
  }
}
