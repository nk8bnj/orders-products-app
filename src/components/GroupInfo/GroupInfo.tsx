'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts } from '@/store/productsSlice'
import { AppDispatch, RootState } from '@/store/store'

import { IOrder } from '@/types/types'
import { formatDate } from '@/utils/utils'

import styles from './GroupInfo.module.scss'

interface Props {
  order: IOrder
  selectedOrder: IOrder | null
  setSelectedOrder: (order: IOrder) => void
}

const GroupInfo: React.FC<Props> = ({
  order,
  selectedOrder,
  setSelectedOrder,
}) => {
  const { products } = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const currentProducts = products.filter(
    (product) => product.order === order.id
  )

  const handleOrderClick = () => {
    setSelectedOrder(order)
  }

  return (
    <div
      className={`${styles.container} ${
        selectedOrder?.id === order.id ? styles.selected : ''
      }`}
      onClick={handleOrderClick}>
      <div className={styles.productsAmount}>
        <p>{currentProducts.length}</p>
        <p>
          <span className={styles.smallText}>products</span>
        </p>
      </div>
      <div className={styles.date}>
        <p>
          <span className={styles.smallText}>
            {formatDate(order.date, 'short')}
          </span>
        </p>
        <p>{formatDate(order.date, 'long')}</p>
      </div>

      <div className={styles.rightArrow}>
        {selectedOrder?.id === order.id && (
          <img
            src="/right-arrow.png"
            className={styles.rightArrow}
            alt="Arrow"
          />
        )}
      </div>
    </div>
  )
}

export default GroupInfo
