import React from 'react'
type PropsType={
    name:string,
    photo:string
}
const SingleItem = (props:PropsType) => {
  return (
    <>
    <img src={props.photo} alt="" />
    <h1>{props.name}</h1>
    </>
  )
}

export default SingleItem