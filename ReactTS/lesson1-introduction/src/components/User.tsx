import React from 'react'
interface UserType {
        name:string,
        messageCount:number,
        isLoggedIn:boolean

}


const User = (props:UserType) => {
  return (
    <div>
        {props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} message !`:"Welcome guest!"}
    </div>
  )
}

export default User