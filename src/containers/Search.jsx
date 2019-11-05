import React, { Component } from 'react';
import SearchPlace from '../components/SearchPlace';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.elementRef = React.createRef();
    this.handleDirection = this.handleDirection.bind(this);
  }

  componentDidMount() {
    this.elementRef.current.focus();
  }

  handleDirection(){
    this.props.history.goBack();
  }

  render() {
    return(
      <>
        <div className='header'>
          <SeekerInput refName={this.elementRef} placeholder='¿A dónde quieres ir hoy?' type='text' />
          <SmallButtonDirection href={this.handleDirection} background='https://img.icons8.com/android/50/000000/return.png' />
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
  }


}
export default Search;

export default Search;