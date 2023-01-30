import { useRef, useState } from 'react'
import { Button } from 'react-bootstrap'

const AppUseRef = () => {
    let info:any="";
    const [data,setData] = useState<string>('test');
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick =()=>{
        console.log(inputRef.current);
         info += inputRef.current?.value;
         setData(info);
         
    }

  return (
    <div>
        <h1>{data}</h1>
        <input type="text" ref={inputRef}/><Button onClick={handleClick} variant="primary">click</Button>
    </div>
  )
}

export default AppUseRef