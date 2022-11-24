import React, { Component } from 'react'
import Nav from './components/Nav'
import Slider from './components/Slider'
class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Slider/>
      </div>
    )
  }
}

export default App