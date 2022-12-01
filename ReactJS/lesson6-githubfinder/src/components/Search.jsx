import React, { Component } from 'react'

class Search extends Component {

    constructor(){
        super();
        this.state={
            keyword:""
        }
    }
    formSubmit=(e)=>{
        e.preventDefault();
        this.props.searchValue(this.state.keyword)
    }
    changeValue=(e)=>{
        this.setState({
            keyword:e.target.value
        })
    }
  render() {
    return (
      <form onSubmit={this.formSubmit} className='container mt-5'>

            <div className="input-group mb-3">
            <input onChange={this.changeValue} type="text" className="form-control" placeholder="Enter username" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
            </div>
            {/* {this.state.keyword} */}

      </form>
    )
  }
}

export default Search