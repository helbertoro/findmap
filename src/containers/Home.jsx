import React from 'react';
import '../assets/styles/Home.sass';
import SeekerInput from '../components/SeekerInput';
import UserIcon from '../components/UserIcon';

const Home = () => (
<div className='header'>
    <SeekerInput />
    <UserIcon />
</div>

);

export default Home;
