"use client";

import { default as ax } from "axios";

export const axiosInstance = ax.create({
  baseURL: "/",
  timeout: 1000
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);