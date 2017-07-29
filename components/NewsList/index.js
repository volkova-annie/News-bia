import React from 'react';
import Article from '../Article';
import './style.css';

const NewsList = props => {
  return <ul className='newsList'>
    {props.news.map(item =>
      <Article
        key={item.url}
        actions={props.actions}
        {...item} />
    )}
  </ul>
}
export default NewsList;
