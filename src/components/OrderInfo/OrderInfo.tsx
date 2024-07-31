'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteOrder } from '@/store/ordersSlice'
import { fetchProducts } from '@/store/productsSlice'
import { AppDispatch, RootState } from '@/store/store'
import Modal from '../Modal/Modal'

import { IOrder, IProduct } from '@/types/types'
import { convertMoney, formatDate } from '@/utils/utils'

import styles from './OrderInfo.module.scss'

interface Props {
  order: IOrder
}

const OrderInfo: React.FC<Props> = ({ order }) => {
  const [isModalVisible, setModalVisible] = useState(false)
  const { products } = useSelector((state: RootState) => state.products)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const currentProducts = products.filter(
    (product) => product.order === order.id
  )

  const sum = currentProducts.reduce((acc: any, product: IProduct) => {
    return acc + product.price
  }, 0)

  const handleCancelDelete = () => {
    setModalVisible(false)
  }

  const handleConfirmDelete = () => {
    dispatch(deleteOrder(order.id))
    setModalVisible(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>{order.title}</p>
      </div>
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
      <div>
        <p className={styles.smallText}>{sum}$</p>
        <p>{convertMoney(sum)} UAH</p>
      </div>
      <img
        src="/delete.svg"
        className={styles.deleteIcon}
        alt="Delete"
        onClick={() => setModalVisible(true)}
      />

      {isModalVisible && (
        <Modal
          id={order.id}
          title="order"
          order={order}
          onClose={handleCancelDelete}
          onDelete={handleConfirmDelete}
        />
      )}
    </div>
  )
}

export default OrderInfo
