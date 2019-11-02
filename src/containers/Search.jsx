import React, { Component } from 'react';
import SearchPlace from '../components/SearchPlace';

class Search extends Component {
    constructor (props) {
        super(props);
        this.searchRef = React.createRef();
    }
    componentDidMount () {
        this.searchRef.current.focus();
    }
    render() {
        return (
            <>
                <h1>Search</h1>
                <SearchPlace refName={this.searchRef} />
                <button onClick={() => this.props.history.goBack()}>Regresar</button>
            </>
        );
    }
}

export default Search;