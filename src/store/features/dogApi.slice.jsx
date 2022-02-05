import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const url = 'https://api.thedogapi.com/v1/'

export const apiSlice = createApi({
    reducerpath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    endpoints(build) {
        return {
            fetchDogImgs: build.query({
                query(limit=20) {
                    return `/images/search?limit=${limit}`
                }
            })
        }
    }
})


export const { useFetchDogImgsQuery} = apiSlice