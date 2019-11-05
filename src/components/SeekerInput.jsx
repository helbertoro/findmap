import React from 'react';
import '../assets/styles/components/SeekerInput.sass';

const SeekerInput = ({ type, placeholder, direction, refName }) => {

  return (
    <input ref={refName} className='seeker' onClick={direction} type={type} name='seeker' placeholder={placeholder} />
  );
}

export default SeekerInput;
