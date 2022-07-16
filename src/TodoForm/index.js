import React from 'react'
import { TodoContext } from '../TodoContext';
import "./TodoForm.css";

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue.length <= 0) return;
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    };
    return (
        <form onSubmit={onSubmit} className='form'>
            <label>Escribe tu nuevo Todo</label>
            <textarea
                className='textarea'
                value={newTodoValue}
                onChange={onChange}
                placeholder='Texto de ejemplo'
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    className='TodoForm-button TodoForm-button--add'
                    onClick={onCancel}
                >
                Cancelar
                </button>
                <button
                    type='submit'
                    className='TodoForm-button TodoForm-button--add'
                >
                Agregar
                </button>
            </div>
        </form>
    );
}

export { TodoForm }