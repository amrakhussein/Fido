import { configureStore } from '@reduxjs/toolkit'
import { dogApiSlice } from '../features/dogApi.slice'

export const store = configureStore({
  reducer: {
    [dogApiSlice.reducerPath]: dogApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dogApiSlice.middleware)
  },
})
