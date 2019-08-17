import React, { Component } from 'react';
import Meme from '../components/Meme';
import MemeInput from '../components/MemeInput';
import './MemeMaker.css';

export default class MemeMaker extends Component {
  state = {
    url: '',
    header: '',
    footer: '',
    headerColor: '#000000',
    footerColor: '#000000',
    displayedUrl: 'https://imgflip.com/s/meme/Satisfied-Seal.jpg'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleUrlClick = (event) => {
    event.preventDefault();
    this.setState({ displayedUrl: this.state.url });
  }

  render() {
    return (
      <section>
        <MemeInput onChange={this.handleChange} onUrlClick={this.handleUrlClick} memeState={this.state}/>
        <Meme memeState={this.state}/>
      </section>
    );
  }
}
