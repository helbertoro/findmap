import React from 'react';
import SearchPlace from '../components/SearchPlace';

const Home = props => {
    const handleOnFocus = () => {
        props.history.push("/search");
    }
    return (
        <>
            <h1>Home</h1>
            <SearchPlace functionName={handleOnFocus}/>
        </>
    );
}

export default Home;