'use client'

import { deleteOrder, setSelectedOrder } from '@/store/ordersSlice'
import { fetchProducts } from '@/store/productsSlice'
import { AppDispatch, RootState } from '@/store/store'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../Modal/Modal'

import { IOrder } from '@/types/types'
import { convertMoney, formatDate } from '@/utils/utils'

import Image from 'next/image'
import Link from 'next/link'
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
  }, [dispatch])

  const currentProducts = products.filter(
    (product) => product.order === order.id
  )

  const sum = currentProducts.reduce((acc, product) => acc + product.price, 0)

  const handleCancelDelete = () => {
    setModalVisible(false)
  }

  const handleConfirmDelete = () => {
    dispatch(deleteOrder(order.id))
    setModalVisible(false)
  }

  const handleGroupInfo = () => {
    dispatch(setSelectedOrder(order))
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Link href="/groups" className={styles.link} onClick={handleGroupInfo}>
          <p>{order.title}</p>
          <Image
            src="/link.png"
            className={styles.linkLogo}
            alt="link logo"
            width={16}
            height={16}
          />
        </Link>
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
      <Image
        src="/delete.svg"
        className={styles.deleteIcon}
        alt="Delete"
        width={24}
        height={24}
        onClick={() => setModalVisible(true)}
      />

      {isModalVisible && (
        <Modal
          id={order.id}
          title="Order"
          order={order}
          onClose={handleCancelDelete}
          onDelete={handleConfirmDelete}
        />
      )}
    </div>
  )
}

export default OrderInfo
