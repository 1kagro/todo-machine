// import React from 'react';
import "./TodoItem.css";
import icon_cancel from "../assets/img/cancel.svg";
import icon_correct from "../assets/img/correct.svg";

function TodoItem(props) {
    const onComplete = () => {
        console.log("hola")
        alert('Ya completaste el todo ' + props.text);
    };

    const onDelete = () => {
        alert('Ya borraste el todo ' + props.text);
    };

    return (
        <li className='TodoItem'>
            <p className={`${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <img
                className={`Icon ${props.completed ? 'Icon-inactive' : 'Icon-active'}`}
                src={icon_correct}
                alt="icon check"
                onClick={props.completed ? onComplete : onDelete}
                />
        </li>
    );
}

export { TodoItem };