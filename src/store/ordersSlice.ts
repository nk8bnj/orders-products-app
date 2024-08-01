import { IOrder } from '@/types/types'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface OrdersState {
  orders: IOrder[]
  selectedOrder: IOrder | null
  error: string | null
}

const initialState: OrdersState = {
  orders: [],
  selectedOrder: null,
  error: null,
}

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const response = await axios.get(
    'https://orders-products-app.vercel.app/data/orders.json'
  )
  return response.data as IOrder[]
})

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setSelectedOrder(state, action: PayloadAction<IOrder | null>) {
      state.selectedOrder = action.payload
    },
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

export const { deleteOrder, setSelectedOrder } = ordersSlice.actions

export default ordersSlice.reducer
