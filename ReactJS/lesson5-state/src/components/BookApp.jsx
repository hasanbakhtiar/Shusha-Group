import React, { Component } from 'react'

class BookApp extends Component {
    constructor(){
        super();
        this.state={
            data:[
            {
                id:1,
                bookphoto:"https://novella.az/wp-content/uploads/2020/08/Webp.net-compress-image499.jpg",
                bookname:"1984",
                bookauther:"George Orwell",
                bookprice:10,
    
            },
            {
                id:2,
                bookphoto:"https://images.penguinrandomhouse.com/cover/9780143108276",
                bookname:"Master and Matgarita",
                bookauther:"Bulqakov",
                bookprice:20,
            }
        ]}
    }

    oneBook=()=>{
     
        this.setState(
            {data:[
            {
                id:3,
                bookphoto:"https://kitabyukle.files.wordpress.com/2013/04/sankt_petersburg_suc_ve_ceza.jpg",
                bookname:"1984",
                bookauther:"George Orwell",
                bookprice:10,
    
            },
            {
                id:4,
                bookphoto:"https://upload.wikimedia.org/wikipedia/az/a/af/Fyodor_Dostoyevski._Cinay%C9%99t_v%C9%99_c%C9%99za.jpg",
                bookname:"Master and Matgarita",
                bookauther:"Bulqakov",
                bookprice:20,
            }
        ]})
    
      
    }

    twoBook=()=>{
     
        this.setState(
            { data:[
                {
                    id:1,
                    bookphoto:"https://novella.az/wp-content/uploads/2020/08/Webp.net-compress-image499.jpg",
                    bookname:"1984",
                    bookauther:"George Orwell",
                    bookprice:10,
        
                },
                {
                    id:2,
                    bookphoto:"https://images.penguinrandomhouse.com/cover/9780143108276",
                    bookname:"Master and Matgarita",
                    bookauther:"Bulqakov",
                    bookprice:20,
                }
            ]})
    
      
    }
    
  render() {
    return (
      <div className='container mt-5'>
      <button onClick={this.oneBook} className="btn btn-primary">One book</button>
      <button onClick={this.twoBook} className="btn btn-primary">Two book</button>
     <div className="row">
     {this.state.data.map((fd,i)=>{
 return <div key={i} className="card" style={{width: '18rem'}}>
  <img src={fd.bookphoto} className="card-img-top" alt="..." />
  <div className="card-body">
      <h5 className="card-title">{fd.bookname}</h5>
      <p className="card-text">{fd.bookauther}</p>
      <p className="card-text">{fd.bookprice}$</p>
      <i class="fa-solid fa-house"></i>
      
  </div>
  </div>
      })}
     </div>
          

      
      
      </div>
    )
  }
}

export default BookApp