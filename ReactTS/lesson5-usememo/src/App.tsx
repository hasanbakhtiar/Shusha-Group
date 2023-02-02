import { useMemo, useState } from "react";
import users from "./data/user";
interface userStateType{
  id:number,
  name:string
}


const App = () => {
    const [userId,setUserId] = useState<userStateType[] | undefined>();
    const [count,setCount] = useState(0)
    const getUserRows=()=>{
        console.log("getUserRows");
        return users.map((user:any)=><div key={user.id} onClick={()=>{setUserId(user.id)
          
        }}>{user.name}</div>)
    }
    const userRows = useMemo(()=>getUserRows(),[userId]);
  return (
    <>
    {userId}
    {userRows}
    {count}
    <button style={{"marginLeft":"10px"}} onClick={()=>setCount(count+1)}>+1</button>
    </>
  )
}

export default App