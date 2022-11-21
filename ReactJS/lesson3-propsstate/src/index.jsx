import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import SingleCard from "./components/SingleCard";
import product from "./data/product";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container mt-5">
          <div className="row gap-5">
            {product.map((fd) => {
              return (
                <SingleCard
                  cardphoto={fd.img}
                  cardtitle={fd.title}
                  cardprice={fd.price}
                  cardcolor={fd.color}
                />
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
