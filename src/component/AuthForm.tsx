import React from "react";
import { useForm } from "react-hook-form";
import { UseInputs } from "../types/Use";
type AuthFormUse = {
  onSubmit: (data: UseInputs) => void;
};
export const AuthForm = ({ onSubmit }: AuthFormUse) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UseInputs>();
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            {...register("email", {
              required: "required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors?.email && (
            <small id="emailHelp" className="form-text text-danger">
              {errors?.email?.message}
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            {...register("password", { required: "required}" })}
          />
          {errors?.password && (
            <small id="emailHelp" className="form-text text-danger">
              {errors?.password?.message}
            </small>
          )}
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
