import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/DeleteButtonMin.sass';

const DeleteButtonMin = ({ background }) => {
  return (
    <Link to='/' className='buttonDelete'><img src={background} alt='DeteleButton' /></Link>
  );
};

export default DeleteButtonMin;

