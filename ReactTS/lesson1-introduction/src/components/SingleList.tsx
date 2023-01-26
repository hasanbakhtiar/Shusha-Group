type ProductType={
    comingtitle:string,
    comingprice:number
}


const SingleList = (props:ProductType) => {
  return (
    <ul>
        <li>{props.comingtitle}</li>
        <li>{props.comingprice}</li>
    </ul>
  )
}

export default SingleList