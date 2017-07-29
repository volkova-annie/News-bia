import React from 'react';
import './style.css';

const Description = props =>
  <p className='article-description'>
    {props.children}
  </p>

export default Description;
