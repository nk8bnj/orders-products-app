import { configureStore } from '@reduxjs/toolkit'
import ordersReducer from './ordersSlice'
import productsReducer from './productsSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    orders: ordersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
