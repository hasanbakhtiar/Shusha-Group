import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/style.css';
import laptop from './img/unsplash.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'


class Card extends React.Component{
  render(){
    return(
     <div className="col-12 col-sm-6 col-md-3">
     <div className="card" >
  <img src={laptop} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div></div>

    )
  }
}

class App extends React.Component{
  render(){
    return(
     <div className='container mt-5'>
      <div className="row g-5">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    

     </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


