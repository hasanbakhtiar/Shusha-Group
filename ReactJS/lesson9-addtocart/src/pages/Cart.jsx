import React from "react";

const Cart = () => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">photo</th>
            <th scope="col">title</th>
            <th scope="col">price</th>
            <th scope="col">quantity</th>
            <th scope="col">del</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Bag</td>
            <td>25$</td>
            <td>
              <button className="btn btn-primary">-</button>
              <span className="mx-3">{1}</span>
              <button className="btn btn-primary">+</button>
            </td>
            <td>
              <button className="btn btn-danger">Del</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="mt-5">Total Price:200$</h2>
      <button className="mt-3 btn btn-danger">Empty Cart</button>
    </>
  );
};

export default Cart;
