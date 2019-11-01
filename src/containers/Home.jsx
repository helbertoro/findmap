import React from 'react';
import '../assets/styles/Home.sass';
import SeekerInput from '../components/SeekerInput';
import UserIcon from '../components/UserIcon';
import DirectionButton from '../components/DirectionButton';

const Home = () => (
  <div className='container__home'>
    <div className='header'>
      <SeekerInput type='text' placeholder='¿A dónde quieres ir hoy?' />
      <UserIcon href='#' background='https://img.icons8.com/doodle/48/000000/user-female--v4.png' />
    </div>
    <div className='footer'>
      <img src='https://img.icons8.com/pastel-glyph/64/000000/worldwide-location--v2.png' alt='logo' />
      <DirectionButton href='#' background='https://img.icons8.com/ios/50/000000/add.png' />
    </div>
  </div>

);

export default Home;

