import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/UserIcon.sass';

const UserIcon = ({ href, background }) => (
  <Link to={href} className='userIcon'><img src={background} alt='UserIcon'/></Link>
);

export default UserIcon;

