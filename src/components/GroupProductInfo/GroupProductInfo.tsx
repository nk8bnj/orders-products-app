'use client'

import { IProduct } from '@/types/types'

import styles from './GroupProductInfo.module.scss'

interface Props {
  product: IProduct
}

const GroupProductInfo: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.indicator} ${
          product.isFree ? styles.free : ''
        }`}></div>
      <img className={styles.icon} src={product.img} alt={product.name} />
      <div className={styles.name}>
        <p>{product.name}</p>
        <p className={styles.smallText}>S/N {product.sn}</p>
      </div>
      <div className={styles.status}>
        <p className={`${product.isFree ? styles.freeText : ''}`}>
          {product.isFree ? 'Free' : 'Under repair'}
        </p>
      </div>
      <img src="/delete.svg" className={styles.delete} alt="Delete" />
    </div>
  )
}

export default GroupProductInfo
