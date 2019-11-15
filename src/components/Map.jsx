import React, { Component } from 'react';
import { connect } from 'react-redux';

class Map extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    this.props.onMapLoad(map)
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
  }

  render() {
    return (
      <div id={this.props.id} />
    );
  }
}

const mapStateToProps = state => {
  return {
    map: state.map
  }
};

export default connect(mapStateToProps, null)(Map);