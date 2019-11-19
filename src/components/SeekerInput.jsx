import React from 'react';
import '../assets/styles/components/SeekerInput.sass';

const SeekerInput = ({ type, placeholder, direction, refName }) => {

  return (
    <div className="seeker">
      <input ref={refName} className='seeker__input' onClick={direction} type={type} name='seeker' placeholder={placeholder} />
      <button className='seeker__button'><i className="fas fa-search"></i></button>
    </div>
  );
}

export default SeekerInput;
