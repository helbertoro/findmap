import React from 'react';
import MapContainer from '../components/MapContainer';
import '../assets/styles/Auth.sass';

const Auth = () => (
  <div className='containerMap'>
    <MapContainer />
    <div className='buttonContainer'>
      <button type='button'>Hola</button>
    </div>
  </div>
);

export default Auth;
