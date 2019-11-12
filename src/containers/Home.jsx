import React from 'react';
import Map from '../components/Map';
import '../assets/styles/Home.sass';
import SeekerInput from '../components/SeekerInput';
import UserIcon from '../components/UserIcon';
import DirectionButton from '../components/DirectionButton';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
    this.setGeolocation = this.setGeolocation.bind(this);

    this.state = {
      position: {
        lat: -34.397, lng: 150.644
      }
    }
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

    console.log(`Latitud: ${this.state.position.lat} Longitud: ${this.state.position.lng}`);
  }

  handleFocus() {
    this.props.history.push('/search');
  }

  setGeolocation(coords) {
    this.setState({position: { lat: coords.latitude, lng: coords.longitude }});
    console.log(this.state);
  }

  render() {
    return (
      <div className='container__home'>

        <Map
          id="map"
          options={{
            center: { lat: this.state.position.lat, lng: this.state.position.lng },
            zoom: 14,
            disableDefaultUI: true
          }}
          onMapLoad={map => {
            var marker = new window.google.maps.Marker({
              position: { lat: this.state.position.lat, lng: this.state.position.lng },
              map: map,
              title: 'Hello Bogotá!'
            });
          }}
        />

        <div className='container__home--header'>
          <SeekerInput focus={this.autoFocus} direction={this.handleFocus} type='text' placeholder='¿A dónde quieres ir hoy?' />
          <UserIcon href='#' background='https://img.icons8.com/doodle/48/000000/user-female--v4.png' />
        </div>
        <div className='container__home--footer'>
          <img src='https://img.icons8.com/pastel-glyph/64/000000/worldwide-location--v2.png' alt='logo' />
          <DirectionButton href='#' background='https://img.icons8.com/ios/50/000000/add.png' />
        </div>
      </div>
    );
  }
}

export default Home;