import React from 'react';
import '../assets/styles/Search.sass';
import SeekerInput from '../components/SeekerInput';
import DirectionButton from '../components/DirectionButton';

const Search = () => (
  <div>
    <SeekerInput />
    <DirectionButton href='/' background='https://img.icons8.com/ios/50/000000/add.png' />
  </div>
);

export default Search;
