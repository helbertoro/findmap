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

    handleSubmit(e) {
        e.preventDefault();
        console.log('submit');
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="seeker">
                <input id='pac-input' ref={this.props.refName} className='seeker__input' type='text' name='seeker' placeholder='¿A dónde quieres ir hoy?' />
                <button className='seeker__button'><i className="fas fa-search"></i></button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    setDestination,
}

export default connect(null, mapDispatchToProps)(SearchGoogleInput);
