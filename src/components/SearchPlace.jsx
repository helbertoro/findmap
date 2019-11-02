import React from 'react';

const SearchPlace = ({ functionName, refName }) => (
    <form action="">
        <input type="text" name="search" onFocus={functionName} ref={refName} placeholder="¿A dónde quieres ir?"/>
    </form>
);

export default SearchPlace;