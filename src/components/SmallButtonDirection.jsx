import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/SmallButtonDirection.sass';

const SmallButtonDirection = ({ href, background }) => {
  return (
    <Link className='smallButton' to={href}><img src={background} alt='SmallButton' /></Link>
  );
};

export default SmallButtonDirection;
