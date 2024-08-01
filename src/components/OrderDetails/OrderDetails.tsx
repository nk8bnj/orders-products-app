import Link from 'next/link'

import GroupProductInfo from '../GroupProductInfo/GroupProductInfo'

import { IProduct } from '@/types/types'

import styles from './OrderDetails.module.scss'

interface IOrderDetails {
  products: IProduct[]
  title: string | undefined
}

const OrderDetails: React.FC<IOrderDetails> = ({ products, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {products.map((product) => (
          <GroupProductInfo key={product.id} product={product} />
        ))}
        <Link href={'/orders'} className={styles.closeButton}>
          X
        </Link>
      </div>
    </div>
  )
}

export default OrderDetails
