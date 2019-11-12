import React from 'react';
import '../assets/styles/components/SeekerInput.sass';

class SearchGoogleInput extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let input = document.getElementById('pac-input');
        let searchBox = new google.maps.places.SearchBox(input);

        // searchBox.addListener('places_changed', function() {
        //     let places = searchBox.getPlaceBasicData();
        //     console.log(places);
        // })

    }
    
    render() {
        return (
            <input id='pac-input' ref={this.props.refName} className='seeker' type='text' name='seeker' placeholder='¿A dónde quieres ir hoy?' />
        );
    }
}

export default SearchGoogleInput;
