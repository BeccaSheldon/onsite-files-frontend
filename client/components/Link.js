import React from 'react';

const Link = ({ className, text, url}) => {
  return (
    <a href={ url } className={className}>
      { text ? text : 'Submit' }
    </a>
  );
}

export default Link;
