// import React from 'react';
import "./TodoItem.css";
import icon_cancel from "../assets/img/cancel.svg";
import icon_correct from "../assets/img/correct.svg";

function TodoItem(props) {
    return (
        <li className='TodoItem'>
            <p className={`${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <img className={`Icon ${props.completed && 'Icon-inactive'}`} src={icon_correct} alt="icon check" />
        </li>
    );
}

export { TodoItem };