import {useEffect, useLayoutEffect, useState} from 'react'


const AppUseLayoutEffect = () => {
    const [message,setMessage] = useState('hi');
    useLayoutEffect(()=>{
        alert('changed')
        setMessage('new value');
    },[])
  return (
    <h1>{message}</h1>
  )
}

export default AppUseLayoutEffect