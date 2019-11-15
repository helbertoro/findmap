import React from 'react';
import Map from '../components/Map';
import { connect } from 'react-redux';
import { setPosition} from '../actions';
import SeekerInput from '../components/SeekerInput';
import UserIcon from '../components/UserIcon';
import DirectionButton from '../components/DirectionButton';
import AddFavorites from '../components/AddFavorites';
import '../assets/styles/Home.sass';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
    this.setGeolocation = this.setGeolocation.bind(this);
    this.handleUI = this.handleUI.bind(this);

    this.state = {
      handleUI: false,
    };
  }

  handleUI() {
    this.setState({ handleUI: !this.state.handleUI});
  }


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
        pos => {
          this.setGeolocation(pos.coords);
        },
        err => {
          console.log(`${err.code} ${err.message}`);
        }
    );
  }

  handleFocus() {
    this.props.history.push('/search');
  }

  setGeolocation(coords) {
    this.props.setPosition({ 
      lat: coords.latitude, 
      lng: coords.longitude 
    });
  }

  render() {
    return (
      <div className='container__home'>
        {this.props.position.lat &&
          <Map
            id="map"
            options={{
              center: { lat: this.props.position.lat, lng: this.props.position.lng },
              zoom: 19,
              disableDefaultUI: true
            }}
            onMapLoad={map => {
              var marker = new window.google.maps.Marker({
                position: { lat: this.props.position.lat, lng: this.props.position.lng },
                map: map,
                title: 'Hello Bogotá!'
              });
            }}
          />
        }
        <div className='container__home--header'>
          <SeekerInput focus={this.autoFocus} direction={this.handleFocus} type='text' placeholder='¿A dónde quieres ir hoy?' />
          <UserIcon href='#' background='https://img.icons8.com/doodle/48/000000/user-female--v4.png' />
        </div>
        <div className='container__home--footer'>
          <img src='https://img.icons8.com/pastel-glyph/64/000000/worldwide-location--v2.png' alt='logo' />
          <DirectionButton onClick={this.handleUI} href='#' background='https://img.icons8.com/ios/50/000000/add.png' />

          {
            this.state.handleUI && <AddFavorites onClick={this.handleUI} />
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setPosition,
}

const mapStateToProps = state => {
  return {
    position: state.position
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);