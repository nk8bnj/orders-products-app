'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchOrders } from '@/store/ordersSlice'
import { deleteProduct } from '@/store/productsSlice'
import { AppDispatch, RootState } from '@/store/store'
import Modal from '../Modal/Modal'

import { IOrder, IProduct } from '@/types/types'
import { convertMoney, formatDate } from '@/utils/utils'

import styles from './ProductInfo.module.scss'

interface Props {
  product: IProduct
}

const ProductInfo: React.FC<Props> = ({ product }) => {
  const [order, setOrder] = useState<IOrder | null>(null)
  const [isModalVisible, setModalVisible] = useState(false)
  const orders = useSelector((state: RootState) => state.orders.orders)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchOrders())
  }, [dispatch])

  useEffect(() => {
    const currentOrder =
      orders.find((order: IOrder) => order.id === product.order) || null
    setOrder(currentOrder)
  }, [orders, product.order])

  const handleDeleteClick = () => {
    setModalVisible(true)
  }

  const handleConfirmDelete = () => {
    dispatch(deleteProduct(product.id))
    setModalVisible(false)
  }

  const handleCancelDelete = () => {
    setModalVisible(false)
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.indicator} ${
          product.isFree ? styles.free : ''
        }`}></div>
      <img className={styles.icon} src={product.img} alt={product.name} />
      <div className={styles.name}>
        <p>{product.name}</p>
        <p>S/N {product.sn}</p>
      </div>
      <div className={styles.status}>
        <p className={`${product.isFree ? styles.freeText : ''}`}>
          {product.isFree ? 'Free' : 'Under repair'}
        </p>
      </div>
      <div className={styles.guarantee}>
        <p>
          <span className={styles.smallText}>from</span>{' '}
          {formatDate(product.guarantee.start, 'long')}
        </p>
        <p>
          <span className={styles.smallText}>to </span>{' '}
          {formatDate(product.guarantee.end, 'long')}
        </p>
      </div>
      <div className={styles.type}>
        <p>{product.type}</p>
      </div>
      <div className={styles.price}>
        <p className={styles.smallText}>{product.price}$</p>
        <p>{convertMoney(product.price)} UAH</p>
      </div>
      <div className={styles.date}>
        <p>
          Order Date:
          <br />
          {order ? formatDate(order.date, 'long') : 'N/A'}
        </p>
      </div>
      <img
        src="/delete.svg"
        className={styles.delete}
        alt="Delete"
        onClick={handleDeleteClick}
      />
      {isModalVisible && (
        <Modal
          id={product.id}
          title="product"
          product={product}
          onClose={handleCancelDelete}
          onDelete={handleConfirmDelete}
        />
      )}
    </div>
  )
}

export default ProductInfo
