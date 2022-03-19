import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const url = 'https://dog.ceo/api'

export const dogApiSlice = createApi({
  reducerpath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints(builder) {
    return {
      fetchDogBreeds: builder.query({
        query: () => '/breeds/list',
      }),
      fetchDogBreedsSelected: builder.query({
        query: (breed) => `https://dog.ceo/api/breed/${breed}/images`,
      }),
    }
  },
})

export const { useFetchDogBreedsSelectedQuery } = dogApiSlice
export const { useFetchDogBreedsQuery } = dogApiSlice
