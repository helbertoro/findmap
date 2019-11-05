import React from 'react';
import '../assets/styles/components/BigButton.sass';

const BigButton = ({ text }) => (
  <button type='button' className='buttonBig'>{text}</button>
);

export default BigButton;
