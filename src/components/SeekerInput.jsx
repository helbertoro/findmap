import React from 'react';
import '../assets/styles/components/SeekerInput.sass';

const SeekerInput = ({ type, placeholder, direction, refName }) => {

  return (
    <div className="seeker">
      <input ref={refName} className='seeker__input' onClick={direction} type={type} name='seeker' placeholder={placeholder} />
      <button className='seeker__button'><img className="seeker__button--img" src="https://img.icons8.com/ios-filled/50/000000/search.png"/></button>
    </div>
  );
}

export default SeekerInput;
