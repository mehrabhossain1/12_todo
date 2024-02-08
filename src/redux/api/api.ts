import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const baseApi = createApi({
//   reducerPath: 'baseApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
//   endpoints: (builder) => ({
//     getTodos: builder.query({
// query: () => '/tasks'  // এই ৩ ভাবে করা যায়

// query: () => {
//   return {
//     url: '/tasks',
//     method: 'GET',
//   };
// },

//       query: () => ({
//         url: '/tasks',
//       }),
//     }),
//   }),
// });

//
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['todo'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: '/tasks',
        method: 'GET',
      }),
      providesTags: ['todo'],
    }),
    addTodo: builder.mutation({
      query: (data) => {
        console.log('Inside base api', data);
        return {
          url: '/task',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['todo'],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } = baseApi;
