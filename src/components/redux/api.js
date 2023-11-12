import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://654d4d14cbc3253557417743.mockapi.io",
  }),

  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: ({ page = 1, make }) => ({
        url: "/cars",
        params: { page, make, limit: 12 },
      }),
    }),
  }),
});

export const { useLazyGetAllCarsQuery } = api;
