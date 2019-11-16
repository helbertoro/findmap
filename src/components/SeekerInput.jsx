import React from 'react';
import '../assets/styles/components/SeekerInput.sass';

const SeekerInput = ({ type, placeholder, direction, refName, onChange }) => {

  return (
    <input ref={refName} className='seeker' onChange={onChange} onClick={direction} type={type} name='seeker' placeholder={placeholder} />
  );
}

export default SeekerInput;
