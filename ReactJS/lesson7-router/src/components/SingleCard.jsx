import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class SingleCard extends Component{
  render(){
    return (
      <div className="col-12 col-sm-6 col-md-3">
      <div className="card" >
        <img src={this.props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.desc.substr(0,30)}...</p>
          <Link to={`/products/${this.props.id}`} className="btn btn-primary">read more</Link>
        </div>
      </div>
      </div>
      
          )
  }
}

export default SingleCard