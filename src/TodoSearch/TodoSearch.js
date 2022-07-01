// import React from 'react';
import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
        console.log(event.target.value);
    };

    return(
        <input
            type="search"
            placeholder="Search Anything" 
            className="TodoSearch"
            onChange={onSearchValueChange}
        />
    );
}

export {TodoSearch};