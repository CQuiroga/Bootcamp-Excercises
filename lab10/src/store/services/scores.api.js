import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const scoreApi = createApi({
  reducerPath: 'scoreApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/' }),
  endpoints: (builder) => ({
    getScores: builder.query({
      query: () => 'scores',
    }),
    addNewScore: builder.mutation({
      query: (newScore) => ({
        url: 'scores',
        method: 'POST',
        body: newScore,
      }),
    }),
  }),
});

export const { useGetScoresQuery, useAddNewScoreMutation } = scoreApi;