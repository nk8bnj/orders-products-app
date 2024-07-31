'use client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import OrderInfo from '@/components/OrderInfo/OrderInfo'
import { fetchOrders } from '@/store/ordersSlice'
import { AppDispatch, RootState } from '@/store/store'

import { IOrder } from '@/types/types'

import styles from './Orders.module.scss'

const Orders = () => {
  const dispatch = useDispatch<AppDispatch>()
  const orders = useSelector((state: RootState) => state.orders.orders)

  useEffect(() => {
    dispatch(fetchOrders())
  }, [dispatch])

  return (
    <div>
      <div className={styles.header}>
        <h1>Order Management</h1>
      </div>
      {orders.map((order: IOrder) => (
        <OrderInfo key={order.id} order={order} />
      ))}
    </div>
  )
}

export default Orders
