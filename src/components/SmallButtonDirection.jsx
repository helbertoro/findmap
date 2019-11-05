import React from 'react';
import '../assets/styles/components/SmallButtonDirection.sass';

const SmallButtonDirection = ({ href, background }) => {
  return (
    <button type='button' onClick={href} className='smallButton' />
  );
}

export default SmallButtonDirection;
