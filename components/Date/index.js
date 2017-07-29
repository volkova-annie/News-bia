import React from 'react';
import './style.css';

const Date = props =>
  <span className='article-date'>
    {props.date && props.date.toLocaleDateString()}
  </span>

export default Date;
