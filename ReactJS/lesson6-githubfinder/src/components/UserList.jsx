import React, { Component } from "react";
import SingleCard from "./SingleCard";

class UserList extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row g-3">
          {this.props.uservalue.map((fd,i)=>(
            <SingleCard userdata={fd} key={i}/>
          ))}
        </div>
      </div>
    );
  }
}

export default UserList;
