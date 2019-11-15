import React from 'react';
import '../assets/styles/components/MediumButton.sass';

const MediumButton = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className='mediumButton' >{text}</button>
    );
};

export default MediumButton;