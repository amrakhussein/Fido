import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './features/dogApi.slice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware)
    },
})


console.log('store: ', store.getState());