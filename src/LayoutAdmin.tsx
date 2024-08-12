import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const LayoutAdmin = () => {
  const token = localStorage.getItem("token");
  return (
    <div className="container">
      {token ? <Outlet></Outlet> : <Navigate to={"/login"} />}
    </div>
  );
};
