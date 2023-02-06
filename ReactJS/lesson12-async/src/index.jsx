import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


const App =()=> {
  const [data,setData] = useState([]);
  useEffect(()=>{
    const comingData = async()=>{
      const mydata = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setData(mydata.data);
    }
    comingData();
  },[])
    return (
      <div className="container mt-5">
        {data.map((item,i)=>{
          return <li key={i}>{item.title}</li>
        })}
      </div>
    );
  }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
