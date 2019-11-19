import React from 'react';
import '../assets/styles/Search.sass';
import SeekerInput from '../components/SearchGoogleInput';
import SmallButtonDirection from '../components/SmallButtonDirection';
import DirectionButton from '../components/DirectionButton';
import TitleSearch from '../components/TitleSearch';
import TextSearch from '../components/TextSearch';
import DeleteButtonMin from '../components/DeleteButtonMin';
import BigButton from '../components/BigButton';
import SearchGoogleInput from '../components/SearchGoogleInput';

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
      <div className='container-search'>
        <div className='container-search__header'>
          <SmallButtonDirection href={this.handleDirection}  />
          <SearchGoogleInput refName={this.elementRef} />
        </div>
        <section className='container-search__banner'>
          <DirectionButton href='#' background='https://img.icons8.com/color/48/000000/money-heist-dali.png' />
          <DirectionButton href='#' background='https://img.icons8.com/color/48/000000/walter-white.png' />
          <DirectionButton href='#' background='https://img.icons8.com/color/48/000000/iron-man.png' />
          <DirectionButton href='#' background='https://img.icons8.com/color/48/000000/money-heist-dali.png' />
          <DirectionButton href='#' background='https://img.icons8.com/color/48/000000/walter-white.png' />
        </section>
        <section className='container-search__favorites'>
          <TitleSearch text='Favoritos' />
          <div className='container-search__favorites--favorite'>
            <TextSearch href='#' text='Contray to popular belief' />
            <DeleteButtonMin background='https://img.icons8.com/color/48/000000/minus.png' />
          </div>
          <div className='container-search__favorites--favorite'>
            <TextSearch href='#' text='Lorem Impsum is not simply random text' />
            <DeleteButtonMin background='https://img.icons8.com/color/48/000000/minus.png' />
          </div>
          <div className='container-search__favorites--favorite'>
            <TextSearch href='#' text='Contray to popular belief' />
            <DeleteButtonMin background='https://img.icons8.com/color/48/000000/minus.png' />
          </div>
          <div className='container-search__favorites--favorite'>
            <TextSearch href='#' text='Lorem Impsum is not simply random text' />
            <DeleteButtonMin background='https://img.icons8.com/color/48/000000/minus.png' />
          </div>
          <div className='container-search__favorites--button'>
            <BigButton text='Ver todos los favoritos' />
          </div>
        </section>
        <section className='container-search__favorites'>
          <TitleSearch text='Historial de búsqueda' />
          <div className='container-search__favorites--favorite'>
            <TextSearch href='#' text='Contray to popular belief' />
          </div>
          <div className='container-search__favorites--favorite'>
            <TextSearch href='#' text='Lorem Impsum is not simply random text' />
          </div>
          <div className='container-search__favorites--favorite'>
            <TextSearch href='#' text='Contray to popular belief' />
          </div>
        </section>
      </div>
    );
  }

}
export default Search;