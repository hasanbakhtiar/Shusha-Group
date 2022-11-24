import React, { Component } from 'react'

class Slider extends Component {
  render() {
    return (
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>

    )
  }
}

export default Slider