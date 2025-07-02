// src/utils/custom-instance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const customInstance = async ({
  url,
  method,
  data,
  params,
  headers,
}: any) => {
  const response = await axiosInstance({
    url,
    method,
    data,
    params,
    headers,
  });
  return response.data;
};
