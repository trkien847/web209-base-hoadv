import React from "react";
import { useProduct } from "../hooks/useProduct";
import { Link } from "react-router-dom";

export const List = () => {
  const { products, handleDelete } = useProduct();



  return (
    <div className="container">
      <h1>List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">title</th>
            <th scope="col">price</th>
            <th scope="col">isShow</th>
            <th scope="col">brand</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {products.map((product, index) => (
          <tbody key={index}>
            <tr>
              <th scope="row">{product.title}</th>
              <th scope="row">{product.price}</th>
              <th scope="row">{product.isShow.toString()}</th>
              <th scope="row">{product.brand}</th>
              <th scope="row">
                <Link to={`admin/product/edit/${product.id}`}>
                  <button className="btn btn-warning">Edit</button>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
