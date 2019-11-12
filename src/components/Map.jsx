import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    this.props.onMapLoad(map)
  }

  render() {
    return (
      <div id={this.props.id} />
    );
  }
}

export default Map