'use client'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchOrders } from '@/store/ordersSlice'
import { AppDispatch, RootState } from '@/store/store'

import { IOrder } from '@/types/types'

import GroupInfo from '@/components/GroupInfo/GroupInfo'
import OrderDetails from '@/components/OrderDetails/OrderDetails'
import styles from './Orders.module.scss'

const Orders = () => {
  const dispatch = useDispatch<AppDispatch>()

  const orders = useSelector((state: RootState) => state.orders.orders)
  const products = useSelector((state: RootState) => state.products.products)
  const selectedOrder = useSelector(
    (state: RootState) => state.orders.selectedOrder
  )

  const [currentOrder, setCurrentOrder] = useState<IOrder | null>(selectedOrder)

  useEffect(() => {
    dispatch(fetchOrders())
  }, [dispatch])

  const selectedProducts = products.filter(
    (product) => product.order === currentOrder?.id
  )

  return (
    <div>
      <div className={styles.header}>
        <h1>Order Management</h1>
      </div>
      <div className={styles.container}>
        <div>
          {orders.map((order: IOrder) => (
            <GroupInfo
              key={order.id}
              order={order}
              selectedOrder={currentOrder}
              setSelectedOrder={setCurrentOrder}
            />
          ))}
        </div>
        <OrderDetails products={selectedProducts} title={currentOrder?.title} />
      </div>
    </div>
  )
}

export default Orders
