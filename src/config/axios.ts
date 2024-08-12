import axios from 'axios'
import React from 'react'

export const configAxios = () => {
  axios.defaults.baseURL = "http://localhost:3000";
  const token = localStorage.getItem("token");
  axios.interceptors.request.use((config)=>{
    if(token){
        config.headers.Authorization = `Bear${token}`;
    }
    return config;
  })
}
