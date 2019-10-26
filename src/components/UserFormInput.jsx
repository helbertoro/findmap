import React from 'react';
import '../assets/styles/components/UserFormInput.sass';

const UserFormInput = ({type, placeholder}) => (
    <input className="user-form__input" type={type} placeholder={placeholder}/>
);

export default UserFormInput;