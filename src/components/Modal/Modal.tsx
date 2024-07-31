import React from 'react'

import DeleteOrderInfo from '../DeleteOrderInfo/DeleteOrderInfo'
import DeleteProductInfo from '../DeleteProductInfo/DeleteProductInfo'

import { IOrder, IProduct } from '@/types/types'

import styles from './Modal.module.scss'

interface Props {
  id: number
  product?: IProduct
  order?: IOrder
  title: string
  onClose: () => void
  onDelete: (id: number) => void
}

const Modal: React.FC<Props> = ({
  id,
  product,
  order,
  title,
  onClose,
  onDelete,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          Are you sure you want to delete this {title}?
        </h3>
        {title === 'product' ? (
          <DeleteProductInfo product={product} />
        ) : (
          <DeleteOrderInfo order={order} />
        )}
        <div className={styles.buttons}>
          <button className={styles.buttons__cancel} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.buttons__delete} onClick={() => onDelete(id)}>
            <img
              className={styles.deleteIcon}
              src="/delete-red.svg"
              alt="delete"
            />
            Delete
          </button>
        </div>
        <div onClick={onClose} className={styles.closeButton}>
          X
        </div>
      </div>
    </div>
  )
}

export default Modal
