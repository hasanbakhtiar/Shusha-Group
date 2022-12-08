import { Component } from 'react'
import SingleCard from '../components/SingleCard'
import productdata from '../data/productdata'

 class ProductList extends Component{
  render(){
    return (
      <div className='row'>
        {productdata.map((fd,i)=>(
            <SingleCard 
            title={fd.title}
            image={fd.image}
            desc = {fd.description}
            key={i}
            id={fd.id}
            />
        ))}
      </div>
    )
}
}

export default ProductList