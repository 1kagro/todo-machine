// import React from 'react';
import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
        console.log(event.target.value);
    };

    return(
        <input
            type="search"
            placeholder="Search Anything" 
            className="TodoSearch"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export {TodoSearch};