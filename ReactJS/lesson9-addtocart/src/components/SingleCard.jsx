import React from 'react'

const SingleCard = ({photo,title,desc}) => {
  return (
    <div className='col-12 col-sm-6 col-md-4'>
        <div className="card">
        <img src={photo} height="300" className="card-img-top" alt={title} />
        <div className="card-body">
            <h5 className="card-title">{title.substring(0, 20)}</h5>
            <p className="card-text">{desc.substring(0, 30)}</p>
            <button href="#" className="btn btn-primary">Add to card</button>
        </div>
        </div>
    </div>
  )
}

export default SingleCard