import { useState } from 'react';
import './App.css';


function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);

  const createHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: todoTitle,
    }
    setTodoList([...todoList, newTodo]);
    setTodoTitle("");
  }

  const editHandler = (id) => {
    const tobeEditedTodo = todoList.find(todo => todo.id === id);
    setIsEditable(true);
    setEditableTodo(tobeEditedTodo);
    setTodoTitle(tobeEditedTodo.title);
  }

  return (
    <div className="App">
       <form>
        <input type="text" name='todoTitle' value={todoTitle} onChange={(e)=> setTodoTitle(e.target.value)} />
        <button onClick={(e)=> createHandler(e)}>Add Todo</button>
       </form>

       <ul>
        {todoList.map(todo => (
            <li>
            <span>{todo.title}</span>
            <button onClick={()=> editHandler(todo.id)}>Edit</button>
            <button>Delete</button>
            </li>

        ))}
       </ul>
    </div>
  );
}

export default App; 