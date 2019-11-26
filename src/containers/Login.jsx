import React from 'react';
import { Link } from 'react-router-dom';
import UserFormInput from '../components/UserFormInput';
import UserFormButton from '../components/UserFormButton';
import '../assets/styles/UserForm.sass'
import Logo from '../assets/static/logo.png';

const Login = (props) => {

    const handleOnSubmit = e => {
        e.preventDefault();
        props.history.push('/home');
    }

    return (
        <div className="container">
            <div className="container__auth">
                <img className="container__auth--logo" src={Logo} alt="FindMap"/>
                <h2>Iniciar sesión</h2>
                <form className="user-form" onSubmit={handleOnSubmit}>
                    <UserFormInput type="email" placeholder="Correo electrónico"/>
                    <UserFormInput type="password" placeholder="Contraseña"/>
                    <UserFormButton value="Iniciar sesión"/>
                </form>
                <p>
                    <Link className="container__auth--link" to="/remember-password">
                        Olvide mi contraseña
                    </Link>
                </p>
                <p>
                    <span className="container__auth--text">No tengo una cuenta</span> 
                    <Link className="container__auth--link ml-2" to="/">Registrarme</Link>
                </p>            
            </div>
        </div>
    );
}

export default Login;