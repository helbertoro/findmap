import React from 'react';
import '../assets/styles/components/SmallButtonDirection.sass';

const SmallButtonDirection = ({ href, image }) => {
  return (
    <a onClick={href} className='smallButton'><img src={image} alt=""/></a>
  );
}

export default SmallButtonDirection;
