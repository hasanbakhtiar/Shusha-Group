import  { useState } from 'react'
import SingleList from './SingleList'

type DataType = {
    title:string,
    price:number
}[]

const product = [
    {
        title:"Pen",
        price:2
    },
    {
        title:"Book",
        price:10
    },
    {
        title:"Chair",
        price:12
    }
]

const Products = () => {
    const [data,setData] = useState<DataType>(product);
    
  return (
    <div>
            {data.map((item,i)=>(
                <SingleList key={i} comingtitle={item.title} comingprice={item.price} />
            ))}
    </div>
  )
}

export default Products