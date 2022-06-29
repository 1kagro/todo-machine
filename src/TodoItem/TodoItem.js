// import React from 'react';
import "./TodoItem.css";

function TodoItem(props) {
    return (
        <li className='TodoItem'>
            <p>{props.text}</p>
        </li>
    );
}

export { TodoItem };