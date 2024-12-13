import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

// Tomado del ejemplo API pokemon, arreglar............

export const riegoAPI = createApi({
  // Set the baseUrl for every endpoint below
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getItems: builder.query({
      // Will make a request like http://localhost:3000/items
      query: () => `items`,
    }),
    updateItems: builder.mutation({
      query: ({ nuevaInfo }) => ({
        url: `items`,
        // When performing a mutation, you typically use a method of
        // PATCH/PUT/POST/DELETE for REST endpoints
        method: 'PATCH',
        // fetchBaseQuery automatically adds `content-type: application/json` to
        // the Headers and calls `JSON.stringify(patch)`
        body: nuevaInfo,
      }),
    }),
  }),
})