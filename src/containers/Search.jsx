import React from 'react';
import '../assets/styles/Search.sass';
import SeekerInput from '../components/SeekerInput';
import SmallButtonDirection from '../components/SmallButtonDirection';
import DirectionButton from '../components/DirectionButton';
import TitleSearch from '../components/TitleSearch';
import TextSearch from '../components/TextSearch';
import DeleteButtonMin from '../components/DeleteButtonMin';
import BigButton from '../components/BigButton';

const Search = () => (
  <>
    <div className='header'>
      <SeekerInput placeholder='¿A dónde quieres ir hoy?' type='text' />
      <SmallButtonDirection href='/home' background='https://img.icons8.com/android/50/000000/return.png' />
    </div>
    <section className='banner'>
      <DirectionButton href='#' background='https://img.icons8.com/color/48/000000/money-heist-dali.png' />
      <DirectionButton href='#' background='https://img.icons8.com/color/48/000000/walter-white.png' />
      <DirectionButton href='#' background='https://img.icons8.com/color/48/000000/iron-man.png' />
      <DirectionButton href='#' background='https://img.icons8.com/color/48/000000/money-heist-dali.png' />
      <DirectionButton href='#' background='https://img.icons8.com/color/48/000000/walter-white.png' />
    </section>
    <section className='favorites'>
      <TitleSearch text='Favoritos' />
      <div className='favorits__container'>
        <TextSearch href='#' text='Contray to popular belief' />
        <DeleteButtonMin background='https://img.icons8.com/color/48/000000/minus.png' />
      </div>
      <div className='favorits__container'>
        <TextSearch href='#' text='Lorem Impsum is not simply random text' />
        <DeleteButtonMin background='https://img.icons8.com/color/48/000000/minus.png' />
      </div>
      <div className='favorits__container'>
        <TextSearch href='#' text='Contray to popular belief' />
        <DeleteButtonMin background='https://img.icons8.com/color/48/000000/minus.png' />
      </div>
      <div className='favorits__container'>
        <TextSearch href='#' text='Lorem Impsum is not simply random text' />
        <DeleteButtonMin background='https://img.icons8.com/color/48/000000/minus.png' />
      </div>
      <div className='favorits__button'>
        <BigButton text='Ver todos los favoritos' />
      </div>
    </section>
    <section className='favorites'>
      <TitleSearch text='Historial de búsqueda' />
      <TextSearch href='#' text='Contray to popular belief' />
      <TextSearch href='#' text='Lorem Impsum is not simply random text sebastian' />
      <TextSearch href='#' text='Contray to popular belief' />
    </section>
  </>
);

export default Search;

