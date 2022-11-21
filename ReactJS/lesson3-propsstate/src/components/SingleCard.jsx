import React, { Component } from 'react'

class List extends Component{
    render(){
      return(
       <div className="col">
         <div className="card" >
        <img src={this.props.cardphoto} className="card-img-top" alt={this.props.cardtitle} />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardtitle}</h5>
          <p className="card-text">{this.props.cardprice}$</p>
          <p className="card-text">{this.props.cardcolor}</p>
          <a href="js" className="btn btn-primary">Add to cart</a>
        </div>
      </div>
       </div>

      )
    }
  }

export default List