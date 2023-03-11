import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
};

type UserResponse = {
  users: User[];
};

export const overviewApi = createApi({
  reducerPath: "overviewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/users",
  }),
  endpoints: (builder) => ({
    getFiveUser: builder.query<UserResponse | [], void>({
      query: () => ({ url: `?limit=5` }),
    }),
  }),
});

export const { useGetFiveUserQuery } = overviewApi;
