import React from 'react';
import { Link } from 'react-router-dom';
import UserFormInput from '../components/UserFormInput';
import UserFormButton from '../components/UserFormButton';
import '../assets/styles/UserForm.sass'
import Logo from '../assets/static/logo.png';

const RememberPassword = () => (
    <div className="container">
        <div className="container__auth">
            <img className="container__auth--logo" src={Logo} alt="FindMap"/>
            <h2>Olvide mi contraseña</h2>
            <form className="user-form" action="">
                <UserFormInput type="email" placeholder="Correo electrónico"/>
                <UserFormButton value="Recordar"/>
            </form>
            <p>
                <Link className="container__auth--link ml-2" to="/login">
                    Regresar
                </Link>
            </p>
        </div>
    </div>
);

export default RememberPassword;