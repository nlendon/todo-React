import React from 'react';
import '../App.css'
import TodoList from './TodoList'
import PropTypes from 'prop-types'

function Todo(props) {
    return (
        <div className='todo'>
            <ul>
                {props.todos.map((todo, index) => {
                    return (
                        <TodoList todo={todo} index={index} key={todo.id} onChange={props.onToggle}/>
                    )
                })}
            </ul>
        </div>
    );
}

Todo.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}
export default Todo;