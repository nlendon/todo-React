import './App.css';
import Todo from './Todo/todo'
import React from 'react';
import AddTodo from './Todo/AddTodo';
import Context from './context';

function App() {
  //Data
  const [todos, setTodos] = React.useState([])
  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo
    }))
  }
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
    ]))
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="container">
        <div className='row'>
          <h1>Todo List:</h1>
        </div>
        <Todo todos={todos} onToggle={toggleTodo} />

        <AddTodo onCreate={addTodo}/>
      </div>
    </Context.Provider>
  );
}

export default App;
