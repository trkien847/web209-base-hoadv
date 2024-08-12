import React from "react";
import { useNavigate } from "react-router-dom";
import { UseInputs } from "../types/Use";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const useAuth = () => {
  const nav = useNavigate();

  const handleRegister = async (values: UseInputs) => {
    try {
      await axios.post("/register", values);
      toast.success("Dang ky thanh cong");
      nav("/login");
    } catch (error) {
      toast.error((error as AxiosError)?.message);
    }
  };
  const handleLogin = async (values: UseInputs) => {
    try {
      const { data } = await axios.post("/login", values);
      localStorage.setItem("token", data.accessToken);
      toast.success("Dang nhap thanh cong");
      nav("/admin/product/list");
    } catch (error) {
      toast.error((error as AxiosError)?.message);
    }
  };
  return {
    handleRegister,
    handleLogin,
  };
};
