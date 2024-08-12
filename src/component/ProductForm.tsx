import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Product, ProductInputs } from "../types/Product";
type ProductFormUse = {
    product?: Product;
  onSubmit: (values: ProductInputs) => void;
};
export const ProductForm = ({product, onSubmit }: ProductFormUse) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductInputs>();
  useEffect(()=>{
    if(!product) return;
    reset(product);
  },[product])
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="title">title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="title"
            {...register("title", { required: "required}" })}
          />
          {errors?.title && (
            <small id="emailHelp" className="form-text text-danger">
              {errors?.title?.message}
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="price">price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="price"
            {...register("price", {
              required: "required}",
              min: {
                value: 1,
                message: "Min > 1",
              },
            })}
          />
          {errors?.price && (
            <small id="emailHelp" className="form-text text-danger">
              {errors?.price?.message}
            </small>
          )}
        </div>
        <div className="form-group mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            {...register("isShow")}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check product
          </label>
        </div>
        <div className="form-group mb-3">
          <label className="form-check-label">Brand</label>
          <select
            className="form-select"
            aria-label="Default select example"
            {...register("brand")}
          >
            <option selected>Open this select menu</option>
            <option value="Apple">Apple</option>
            <option value="SamSung">SamSung</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
