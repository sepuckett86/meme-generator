import React from 'react';
import Input from './Input';
import './MemeMaker.css';

export default function MemeMaker() {
  return (
    <>
      <form>
        <Input name="URL" button={true}/>
        <Input name="Header" colorPicker={true}/>
        <Input name="Footer" colorPicker={true}/>
      </form>
    </>
  );
}
