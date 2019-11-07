import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/DirectionButton.sass';

const DirectionButton = ({ background, href }) => {
  return (
    <Link to={href} className='directionButtom'><img src={background} alt='HandleButton' /></Link>
  );
};

export default DirectionButton;
