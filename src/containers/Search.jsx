import React from 'react';
import { connect } from 'react-redux';
import { setDestination } from '../actions';
import SmallButtonDirection from '../components/SmallButtonDirection';
import DirectionButton from '../components/DirectionButton';
import TitleSearch from '../components/TitleSearch';
import TextSearch from '../components/TextSearch';
import DeleteButtonMin from '../components/DeleteButtonMin';
import BigButton from '../components/BigButton';
import '../assets/styles/Search.sass';
import '../assets/styles/components/SeekerInput.sass';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.elementRef = React.createRef();
    this.handleDirection = this.handleDirection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.elementRef.current.focus();
    let input = document.getElementById('pac-input');
    let searchBox = new google.maps.places.Autocomplete(input);
  }

  handleDirection(){
    this.props.history.goBack();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setDestination(e.target.seeker.value);
    this.props.history.push('/home');
  }

  render() {
    return(
      <div className='container-search'>
        <div className='container-search__header'>
          <form onSubmit={this.handleSubmit} className="seeker">
            <input id='pac-input' ref={this.elementRef} className='seeker__input' type='text' name='seeker' placeholder='¿A dónde quieres ir hoy?' />
            <button type="submit" className='seeker__button'><img className="seeker__button--img" src="https://img.icons8.com/ios-filled/50/000000/search.png"/></button>
          </form>
          <SmallButtonDirection href={this.handleDirection} image='https://img.icons8.com/ios-glyphs/50/000000/return.png'/>
        </div>
        <section className='container-search__banner'>
          <DirectionButton href='#' background='https://img.icons8.com/ios/50/000000/espresso-cup.png' />
          <DirectionButton href='#' background='https://img.icons8.com/ios/50/000000/hamburger.png' />
          <DirectionButton href='#' background='https://img.icons8.com/ios/50/000000/sushi.png' />
          <DirectionButton href='#' background='https://img.icons8.com/ios/50/000000/beer.png' />
          <DirectionButton href='#' background='https://img.icons8.com/ios/50/000000/cocktail.png' />
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


const mapDispatchToProps = {
  setDestination,
}

export default connect(null, mapDispatchToProps)(Search);