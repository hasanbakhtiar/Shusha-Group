import {forwardRef, useImperativeHandle,useRef, useState} from 'react'
import { Button } from 'react-bootstrap'


const MyInput = forwardRef((props,ref)=>{
    const [fontSize,setFontSize] = useState(10);
    useImperativeHandle(ref,()=>({
        hi:sayHi,
        incFont:()=>{setFontSize(fontSize+2)},
        decFont:()=>{setFontSize(fontSize-2)}
    }))
    const sayHi =()=>{
        alert('hello')
    }
    return(
        <input type="text" style={{fontSize}}/>
    )
}
)


const AppUseImperativeHandle = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick =()=>{
       inputRef.current.hi();
    }
  return (
    <div>
        <h1>Hello</h1>
        <MyInput ref={inputRef}/><Button variant='success btn-sm' onClick={handleClick}>click</Button>
        <button onClick={()=>{inputRef.current.decFont()}}>-</button>
        <button onClick={()=>{inputRef.current.incFont()}}>+</button>
    </div>
  )
}

export default AppUseImperativeHandle