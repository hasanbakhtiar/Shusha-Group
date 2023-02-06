import  { useState } from 'react'
import { add, remove } from './features/todoSlice';
import { useAppDispatch, useAppSelector } from './store';

const App = () => {
    const todos = useAppSelector(state=>state.todos);
    const [title,setTitle] = useState("");
    const dispatch = useAppDispatch();
    const onSave =()=>{
       if(!title){
        alert("fill input")
       }else{
        dispatch(add(title));
        setTitle('');
       }
    }
    const onDelete =(id:string)=>{
      dispatch(remove(id))
    }
  return (
    <div>
        <input value={title}  type="text" onChange={(e)=>{setTitle(e.target.value)}} />
        <button onClick={onSave}>save</button>
        <ul>
        {todos.map((todo:any,i:number)=>(<li>
          <span>{todo.title}</span>
          <button onClick={()=>onDelete(todo.id)}>del</button>
        </li>))}
        </ul>
    </div>
  )
}

export default App