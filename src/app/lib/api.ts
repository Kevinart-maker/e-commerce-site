// src/lib/api.ts
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach Bearer token if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Adjust storage method if needed
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});