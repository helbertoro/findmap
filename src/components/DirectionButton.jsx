import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/DirectionButton.sass';

const DirectionButton = ({ background, href, onClick }) => {
  return (
    <Link to={href} onClick={onClick} className='directionButtom'><img src={background} alt='HandleButton' /></Link>
  );
};

export default DirectionButton;
