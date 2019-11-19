import React from 'react';
import '../assets/styles/components/SmallButtonDirection.sass';

const SmallButtonDirection = ({ href }) => {
  return (
    <a onClick={href} className='smallButton'><i className="fas fa-angle-left"></i></a>
  );
}

export default SmallButtonDirection;
