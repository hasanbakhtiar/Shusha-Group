import React from 'react'
import { Button } from 'react-bootstrap'

const ModeBtn = ({modedata,setColor}) => {
    const switchColor = ()=>{
        setColor(modedata === 'bg-light'?localStorage.setItem('mode','bg-dark'):localStorage.setItem('mode','bg-light'));
        setColor(modedata === 'bg-light'?'bg-dark':'bg-light');
    }
  return (
    <>
        <Button variant='danger' onClick={switchColor}>{modedata === "bg-light"?"☀️":"🌙"}</Button>
    </>
  )
}

export default ModeBtn