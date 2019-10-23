import React from 'react';
import '../assets/styles/Home.sass';
import SeekerInput from '../components/SeekerInput';
import UserIcon from '../components/UserIcon';
import AddBottom from '../components/AddBottom';

const Home = () => (
  <div className='container'>
    <div className='header'>
      <SeekerInput />
      <UserIcon />
    </div>
    <div className='footer'>
      <img src='https://img.icons8.com/pastel-glyph/64/000000/worldwide-location--v2.png' alt='logo' />
      <AddBottom />
    </div>
  </div>

);

export default Home;

