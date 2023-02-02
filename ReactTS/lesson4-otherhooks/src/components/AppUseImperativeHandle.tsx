import {forwardRef, useImperativeHandle,useRef, useState} from 'react'
import { Button } from 'react-bootstrap'

type PropsType = {}
    
type HandleType = {
  hi: () => void,
  incFont:()=>void,
  decFont:()=>void

}

const MyInput = forwardRef<HandleType>((props:PropsType,ref)=>{
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
    const inputRef = useRef<HandleType>(null);
    const handleClick =()=>{
        let iref:any = inputRef.current
        iref.hi();
    }
  return (
    <div>
        <h1>Hello</h1>
        <MyInput ref={inputRef}/><Button variant='success btn-sm' onClick={handleClick}>click</Button>
        <button onClick={()=>{
            let iref:any = inputRef.current;
            iref.decFont()}}>-</button>
        <button onClick={()=>{
            let iref:any = inputRef.current;
            iref.incFont()}}>+</button>
    </div>
  )
}

export default AppUseImperativeHandle