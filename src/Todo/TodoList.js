import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import Context from '../context';

function TodoList({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context)
    const classes = [];
    if (todo.completed) {
        classes.push("done");
    }
    return (
        <li>
            <span className={classes.join(" ")}>
                <input type="checkbox" onChange={() => onChange(todo.id)} />
                <strong>{index + 1}</strong>.&nbsp;
                {todo.title}
            </span>
            <button onClick={() => removeTodo(todo.id)}>&times;</button>
            
        </li>
    );
}

TodoList.propTypes = {
    todos: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default TodoList;