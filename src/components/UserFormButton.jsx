import React from 'react';
import '../assets/styles/components/UserFormButton.sass';

const UserFormButton = ({ value }) => (
    <button className="user-form__button" type="submit">{ value }</button>
);

export default UserFormButton;