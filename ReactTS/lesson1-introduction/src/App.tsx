import { useState } from 'react'
import Products from './components/Products'
import User from './components/User'


const App = () => {
    const [login,setLogin] = useState(false)
  return (
    <div>
        <User name='Elcin' messageCount={10} isLoggedIn={login}/>
        <button onClick={()=>{setLogin(login?false:true)}}>login</button>
        <Products />
    </div>
  )
}

export default App