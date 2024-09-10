import { useState } from 'react';
import './App.css';


function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);


  const createHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: todoTitle,
    }





    setTodoList([...todoList, newTodo]);
    setTodoTitle("");
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
            <button>Edit</button>
            <button>Delete</button>
            </li>

        ))}
       </ul>
    </div>
  );
}

export default App; 