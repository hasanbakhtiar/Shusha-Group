import React, { Component } from 'react'
class Counter extends Component {
  constructor(){
    super();
    // this.decrement = this.decrement.bind(this);
    this.state = {
      count:10
    }
  }
  decrement=()=>{
  if (this.state.count>0) {
    this.setState({
      count:this.state.count -1
    })
  }
  }
  render() {
    return (
      <div className='mt-5 container'>
        <button className='btn btn-primary' onClick={this.decrement}>-1</button>
        <span className='mx-3'>{this.state.count}</span>
        <button className='btn btn-primary' onClick={()=>{
          this.setState({
            count:this.state.count + 1
          })
        }}>+1</button>
      </div>
    )
  }
}

export default Counter