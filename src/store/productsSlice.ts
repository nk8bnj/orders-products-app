'use client'

import { IProduct } from '@/types/types'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface ProductsState {
  products: IProduct[]
  loading: boolean
  error: string | null
  filter: string
  typeFilter: string
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  filter: '',
  typeFilter: 'all',
}

const localURL = 'http://localhost:3000/data/products.json'
const remoteURL = 'https://orders-products-app.vercel.app/data/products.json'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get(remoteURL)
    return response.data
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload
    },
    setTypeFilter(state, action) {
      // Add this reducer
      state.typeFilter = action.payload
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<IProduct[]>) => {
          state.products = action.payload
          state.loading = false
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export const { setFilter, setTypeFilter, deleteProduct } = productsSlice.actions

export default productsSlice.reducer
