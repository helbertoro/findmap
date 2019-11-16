import React from 'react';
import { connect } from 'react-redux';
import { setDestination } from '../actions';
import '../assets/styles/components/SeekerInput.sass';

class SearchGoogleInput extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let input = document.getElementById('pac-input');
        let searchBox = new google.maps.places.SearchBox(input);

        this.props.setDestination({ 
            lat: 4.5927558,
            lng: -74.1327422
        });
    }
    
    render() {
        return (
            <input id='pac-input' ref={this.props.refName} className='seeker' type='text' name='seeker' placeholder='¿A dónde quieres ir hoy?' />
        );
    }
}

const mapDispatchToProps = {
    setDestination,
}

export default connect(null, mapDispatchToProps)(SearchGoogleInput);
