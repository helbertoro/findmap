import React from 'react';
import { Link } from 'react-router-dom';
import UserFormInput from '../components/UserFormInput';
import UserFormButton from '../components/UserFormButton';
import '../assets/styles/UserForm.sass';

const Register = () => (
    <div className="container">
        <div className="container__auth">
            <h2>Regístrate</h2>
            <form className="user-form" action="">
                <UserFormInput type="text" placeholder="Nombre"/>
                <UserFormInput type="email" placeholder="Correo electrónico"/>
                <UserFormInput type="password" placeholder="Contraseña"/>
                <UserFormButton value="Registrarme"/>
            </form>
            <p>
                <span>Ya tengo una cuenta</span>
                <Link className="container__auth--link ml-2" to="/login">
                    Iniciar sesión
                </Link>
            </p>
        </div>
    </div>
);

export default Register;
