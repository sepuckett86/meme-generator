import React from 'react';
import MemeMaker from '../containers/MemeMaker';
import Header from './Header';
import Footer from './Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <MemeMaker />
      <Footer />
    </>
  );
}
