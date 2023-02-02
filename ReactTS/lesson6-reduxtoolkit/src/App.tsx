import React, { useState } from 'react'
import { add } from './features/todoSlice';
import { useAppDispatch, useAppSelector } from './store';

const App = () => {
    const todos = useAppSelector(state=>state.todos);
    const [title,setTitle] = useState("");
    const dispatch = useAppDispatch();
    const onSave =()=>{
        dispatch(add(title));
        setTitle('');
    }
  return (
    <div>
        <input  type="text" onChange={(e)=>{setTitle(e.target.value)}} />
        <button onClick={onSave}>save</button>
        <ul>
        {todos.map((todo:any,i:number)=>(<li>{todo.title}</li>))}
        </ul>
    </div>
  )
}

export default App