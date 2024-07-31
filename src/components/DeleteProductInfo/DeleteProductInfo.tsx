import { IProduct } from '@/types/types'

import styles from './DeleteProductInfo.module.scss'

interface Props {
  product?: IProduct
}

const DeleteProductInfo: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.indicator} ${
          product?.isFree ? styles.free : ''
        }`}></div>
      <img
        className={styles.productIcon}
        src={product?.img}
        alt={product?.name}
      />
      <div className={styles.productName}>
        <p>{product?.name}</p>
        <p>S/N {product?.sn}</p>
      </div>
    </div>
  )
}

export default DeleteProductInfo
