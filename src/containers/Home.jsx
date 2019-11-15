import React from 'react';
import Map from '../components/Map';
import { connect } from 'react-redux';
import { setPosition} from '../actions';
import SeekerInput from '../components/SeekerInput';
import UserIcon from '../components/UserIcon';
import DirectionButton from '../components/DirectionButton';
import '../assets/styles/Home.sass';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
    this.setGeolocation = this.setGeolocation.bind(this);
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
              disableDefaultUI: true,
              styles: [
                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                  featureType: 'administrative.locality',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'geometry',
                  stylers: [{color: '#263c3f'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#6b9a76'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry',
                  stylers: [{color: '#38414e'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#212a37'}]
                },
                {
                  featureType: 'road',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#9ca5b3'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry',
                  stylers: [{color: '#746855'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#1f2835'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#f3d19c'}]
                },
                {
                  featureType: 'transit',
                  elementType: 'geometry',
                  stylers: [{color: '#2f3948'}]
                },
                {
                  featureType: 'transit.station',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'water',
                  elementType: 'geometry',
                  stylers: [{color: '#17263c'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#515c6d'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.stroke',
                  stylers: [{color: '#17263c'}]
                }
              ]
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
          <DirectionButton href='#' background='https://img.icons8.com/ios/50/000000/add.png' />
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