import React, { useState } from 'react';

export default function Task() {
    const [todoTitle, setTodoTitle] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [isEditable, setIsEditable] = useState[false];
    const [editableTodo, setEditableTodo] = useState(null);

    const createEventHandeler = (e) => {
        e.preventDefault();

        const newTodo = {
            id: Date.now(),
            title: todoTitle,
        }

        setTodoList([newTodo, ...todoList]);
        setTodoTitle("");

    }

    const editHandeler = (id) => {
        const tobeEditedTod = todoList.find(todo => todo.id === id);
        setIsEditable(true);
        setEditableTodo(tobeEditedTod);
        setTodoTitle(tobeEditedTod.title);

    }

    const updateHandeler = (e) =>{
        e.preventDefault();
        editableTodo.title = todoTitle;
        setTodoTitle("");
        setIsEditable(false);
        setEditableTodo(null);
    }

    const deleteHandeler = (id) =>{
        newTodoList = todoList.filter(todo => todo.id !== id);
        setTodoList(newTodoList);
    }


  return (
    <div>
      <h1>Task app</h1>
        <div className="app">
            <form>
                <label htmlFor="">Add Data</label>
                <input type="text" required value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
                <button onClick={(e) => isEditable === true ? updateHandeler(e) : createEventHandeler(e)}>
                    {isEditable === true ? "Update Todo" : "Create Todo"}
                </button>
            </form>
        </div>


    </div>
  );
}
