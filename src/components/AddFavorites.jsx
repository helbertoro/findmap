import React, { Component } from 'react';
import { connect } from 'react-redux';
import SeekerInput from '../components/SeekerInput';
import MediumButton from '../components/MediumButton';
import '../assets/styles/components/AddFavorites.sass';

class AddFavorites extends Component {

  constructor(props) {
    super(props)

    this.actionButton = this.actionButton.bind(this);
    this.getNameFavories = this.getNameFavories.bind(this);
    this.dataFavorites = this.dataFavorites.bind(this);

    this.state = {
      nameFavorite: '',
      location: {},
    };

  }

  componentDidMount() {
    this.setState({ location: this.props.position});
  }

  actionButton() {
    this.props.onClick();
    this.dataFavorites();
  }

  dataFavorites() {
    let size = this.state.nameFavorite.length;

    if (size > 0) {
      if (size < 20) {

        const data =
        {
          "name": this.state.nameFavorite,
          "locationMarker": this.state.location
        };

        console.log('Enviando fetch');
        console.log(data);

      } else {
        console.log('El tamaño no puede exceder los 20 caracteres',size);
      }
    } else {
      console.log('El nombre no puede ser vacio');
    }
  }

  getNameFavories(e) {
    this.setState({ nameFavorite: e.target.value });
  }

  render() {
    return (
      <div className='container-add-favorites'>
        <SeekerInput
          type='text'
          placeholder='Nombre'
          onChange={this.getNameFavories}
        />
        <div className='container-add-favorites__button'>
          <MediumButton
            onClick={this.props.onClick}
            text='Cancelar'
          />

          <MediumButton
            onClick={this.actionButton}
            text='Aceptar'
          />
        </div>
      </div>
    );
  };

};

const mapStateToProps = (state) => {
  return {
    position: state.position,
  };
};

export default connect(mapStateToProps)(AddFavorites);
