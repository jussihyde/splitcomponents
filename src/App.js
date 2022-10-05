import React, {useState} from 'react';
import './App.css';
import Todotable from './components/Todolist';

function App() {

  const [todo, setTodo] = useState({date: '', desc: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
    };
  
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    };
  
  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index))
    };

  return (
    <div className="App">
	<header className="App-header">
       <h1>Simple Todolist</h1>
      </header>
      <form onSubmit={addTodo}>
        <input type="date" name="date" value={todo.date} onChange={inputChanged}/>
        <input type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
        <input type="submit" value="Add" />
      </form>
      <Todotable todos={todos} delete={deleteTodo}/>
    </div>
  );
}

export default App;