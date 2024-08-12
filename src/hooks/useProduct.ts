import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product, ProductInputs } from "../types/Product";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const useProduct = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>();


  console.log({products});
  

  const handleAdd = async (values: ProductInputs) => {
    try {
      await axios.post("/products", values);
      toast.success("Them moi thanh cong");
      nav("/admin/product/list");
    } catch (error) {
      toast.error((error as AxiosError)?.message);
    }
  };
  const handleEdit = async (values: ProductInputs) => {
    try {
      await axios.put("/products" + id, values);
      toast.success("Cap nhat thanh cong");
      nav("/admin/product/list");
    } catch (error) {
      toast.error((error as AxiosError)?.message);
    }
  };
  const getAll = async () => {
    try {
      const { data } = await axios.get("/products");
      setProducts(data);
    } catch (error) {
      toast.error((error as AxiosError)?.message);
    }
  };
  const getDetail = async (id: string) => {
    try {
      const { data } = await axios.get("/products/" + id);
      setProduct(data);
    } catch (error) {
      toast.error((error as AxiosError)?.message);
    }
  };
  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure")) {
      try {
        await axios.delete("/products/" + id);
        getAll();
        toast.success("Xoa thanh cong");
      } catch (error) {
        toast.error((error as AxiosError)?.message);
      }
    }
  };

  useEffect(() => {
    getAll();
  }, []);
  useEffect(() => {
    if (!id) return;
    getDetail(id);
  }, [id]);
  return {
    handleAdd,
    handleEdit,
    products,
    product,
    handleDelete,
  };
};
