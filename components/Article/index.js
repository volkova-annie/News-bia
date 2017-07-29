import React from 'react';
import Title from '../Title';
import Date from '../Date';
import Image from '../Image';
import Description from '../Description';
import Delete from '../Delete';
import Author from '../Author';
import './style.css';

const Article = props => {
  return <li className='article'>
    <div className='article-header'>
      <a className='article-url' href={props.url}>
        <Title>{props.title}</Title>
      </a>
        <Delete {...props} />
    </div>
    <div className='article-body'>
      <Image url={props.url} src={props.urlToImage} />
      <Description>{props.description}</Description>
    </div>
    <div className='article-footer'>
      <Author>{props.author}</Author>
      <Date date={props.publishedAt} />
    </div>
  </li>
}

export default Article;
