import { useState, useEffect } from 'react';
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


    fetch('http://localhost:3000/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then((data) => {
      // setTodoList([...todoList, newTodo]);
      // setTodoTitle("");
      fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then((data) => {
        setTodoList(data);
        setTodoTitle("");
      })
    })
  }

  const editHandler = (id) => {
    const tobeEditedTodo = todoList.find(todo => todo.id === id);
    setIsEditable(true);
    setEditableTodo(tobeEditedTodo);
    setTodoTitle(tobeEditedTodo.title);
  }

  const updateHandler = (e) => {
    e.preventDefault();
    editableTodo.title = todoTitle;
    setTodoTitle("");
    setIsEditable(false);
  }


  const deleteHandler = (id) => {
    // const toBeDeletedTodo = todoList.find(todo => todo.id === id);

    const newTodoList = todoList.filter(todo => todo.id !== id);
      setTodoList(newTodoList);
  }
// ==========show-data in api===========
  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(data => setTodoList(data))
  }, [])

  return (
    <div className="App">
       <form>
        <input type="text" name='todoTitle' value={todoTitle} onChange={(e)=> setTodoTitle(e.target.value)} />
        <button onClick={(e)=> isEditable === true ? updateHandler(e) : createHandler(e)}>
          {isEditable === true ? "Update Todo" : "Add Todo"}
        </button>
       </form>

       <ul>
        {todoList.map(todo => (
            <li>
            <span>{todo.title}</span>
            <button onClick={()=> editHandler(todo.id)}>Edit</button>
            <button onClick={() => deleteHandler(todo.id)}>Delete</button>
            </li>

        ))}
       </ul>
    </div>
  );
}

export default App; 
