import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const user={
    useremail:'hasan@webluna.az',
    userpass:'hasan123'
}


const LoginForm = () => {
    const [alertColor,setAlertColor] = useState();
    const [alertText,setAlertText] = useState();
    const [email,setEmail] = useState();
    const [pass,setPass] = useState();
    const [visibleInp, setVisibleInp] = useState('password');
    const [visibleIcon, setVisibleIcon] = useState('fa-solid fa-eye');
    const navigate = useNavigate();

        const formSubmit = (e)=>{
            e.preventDefault();
          if (!email || !pass) {
            setAlertColor('warning');
            setAlertText('Please, fill input!');
          }else{
            if (email === user.useremail && pass===user.userpass) {
                setAlertColor('success');
            setAlertText('Login successfull!');
            navigate('/home');
            }else{
                setAlertColor('danger');
                setAlertText('Email or password is wrong!');
            }
          }
        }
    
    const visible=()=>{
        if (visibleIcon === 'fa-solid fa-eye') {
            setVisibleIcon('fa-solid fa-eye-slash');
            setVisibleInp('text');
        }else{
            setVisibleIcon('fa-solid fa-eye');
            setVisibleInp('password');
        }
    }
  return (
    <>
    <div className="container my-5">
    <h1 className='text-center'>Login</h1>
    <div className="d-flex align-items-center justify-content-center flex-cloumn">
    <form className='col-6' onSubmit={formSubmit}>
        <p className={`text-center alert alert-${alertColor}`}>{alertText}</p>
    <div className="mb-3">
        <label  className="form-label">Email address</label>
        <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control"  />
    </div>
        <label  className="form-label">Password</label>
    <div className="mb-3 input-group">
        <input onChange={(e)=>{setPass(e.target.value)}} type={visibleInp} className="form-control"  />
        <button onClick={visible} className='btn btn-outline-dark' type='button'><i class={visibleIcon}></i></button>
    </div>
    
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    </div>
    </div>
    </>
  )
}

export default LoginForm