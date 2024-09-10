import React, { useState } from 'react';

export default function 4() {
   const [todoTitle, setTodoTitle] = useState("");
   const [todoList, setTodoList] = useState([]);

   const createHandler = (e) =>{
    e.preventDefault();
    setTodoList([...todoList, todoTitle]);
   }

  return (
    <div>
      <form action="">
        <input type="text" name='todoTitle' value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)}/>
        <button onClick={(e) => createHandler(e)}>add todo</button>
      </form>
    </div>
  )
}
