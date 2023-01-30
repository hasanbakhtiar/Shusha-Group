import React from 'react'
type PropsType={
    name:string
}
const SingleItem = (props:PropsType) => {
  return (
    <h1>{props.name}</h1>
  )
}

export default SingleItem