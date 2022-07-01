import React, {useState} from 'react';
import PropTypes from 'prop-types';

function AddTodo({ onCreate }) {
    const [value, setValue] = useState(" ")

    function submit (event) {
        event.preventDefault();
        if(value.trim()) {
            onCreate(value);
        }
    }
    return (
        <div className='add'>
            <form onSubmit={submit}>
            <input type="text" placeholder='Enter your todo' value={value} onChange={event => setValue(event.target.value)}></input>
            <input type="submit" value="Sumbit"></input>
            </form>
        </div>
    );
}
AddTodo.propTypes = {
    OnChange: PropTypes.func.isRequired
}

export default AddTodo;