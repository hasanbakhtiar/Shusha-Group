import axios from 'axios';
import React, { Component } from 'react'
import Nav from './components/Nav'
import Search from './components/Search'
import UserList from './components/UserList'



class App extends Component {
  constructor(){
    super();
    this.state = {
      users:[]
    }
  }
  
  seachUser=(keyword)=>{
    axios
    .get(`https://api.github.com/search/users?q=${keyword}`)
    .then((res)=>this.setState({users:res.data.items}))
  }
  
  render() {
    return (
      <div>
        <Nav/>
        <Search searchValue={this.seachUser}/>
        <UserList uservalue={this.state.users}/>
      </div>
    )
  }
}

export default App