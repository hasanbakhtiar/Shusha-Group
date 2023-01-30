import axios from 'axios';
import {useState,useEffect} from 'react'
import SingleItem from './SingleItem';

interface DataType{
    title:string,
    image:string
}

const AppApi = () => {
    const [data,setData] = useState<DataType[]>([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
        {data.map((item:any,i:number)=>{
            return <SingleItem name={item.title} photo={item.image} key={i}/>
           
        })}
    </div>
  )
}

export default AppApi