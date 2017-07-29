import React from 'react';
import url from 'url'
import './style.css';

function resolveImageUrl(articleUrl, imageUrl) {
  const articleUrlObj = url.parse(articleUrl)
  const imageUrlObj = url.parse(imageUrl)

  const resolved = {
    hostname: imageUrlObj.hostname || articleUrlObj.hostname,
    host: imageUrlObj.host || articleUrlObj.host,
    path: imageUrlObj.path,
    pathname: imageUrlObj.pathname,
    protocol: imageUrlObj.protocol || articleUrlObj.protocol,
    slashes: imageUrlObj.slashes || articleUrlObj.slashes,
  }


  return url.format(resolved)
}

const Image = props => {
  if (props.src) {
    return <img
      src={resolveImageUrl(props.url, props.src)}
      className='article-image' />
  }
  else {
    return null
  }
}

export default Image;
