import { IOrder } from '@/types/types'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface OrdersState {
  orders: IOrder[]
  error: string | null
}

const initialState: OrdersState = {
  orders: [],
  error: null,
}

const localURL = 'http://localhost:3000/data/orders.json'
const remoteURL = 'https://orders-products-app.vercel.app/data/orders.json'

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const response = await axios.get(remoteURL)
  return response.data as IOrder[]
})

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    deleteOrder(state, action: PayloadAction<number>) {
      state.orders = state.orders.filter((order) => order.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders = action.payload
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to fetch orders'
      })
  },
})

export const { deleteOrder } = ordersSlice.actions

export default ordersSlice.reducer
