import React, { Component } from 'react';
import { connect } from 'react-redux';

class Map extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.destination);
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    /* let trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map); */

    if (Object.keys(this.props.destination).length === 0) {
      let marker = new window.google.maps.Marker({
        position: { lat: this.props.position.lat, lng: this.props.position.lng },
        map: map,
        title: 'My ubication'
      });
    }
    else {
      let directionsRenderer = new google.maps.DirectionsRenderer;
      let directionsService = new google.maps.DirectionsService;
      directionsRenderer.setMap(map);
      this.calculateAndDisplayRoute(directionsService, directionsRenderer);
    }
  }

  calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService.route({
      origin: {lat: this.props.position.lat, lng: this.props.position.lng},
      destination: {query: this.props.destination},
      travelMode: google.maps.TravelMode['DRIVING']
    }, function(response, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  render() {
    return (
      <div id={this.props.id} />
    );
  }
}

const mapStateToProps = state => {
  return {
    map: state.map,
    position: state.position,
    destination: state.destination
  }
};

export default connect(mapStateToProps, null)(Map);