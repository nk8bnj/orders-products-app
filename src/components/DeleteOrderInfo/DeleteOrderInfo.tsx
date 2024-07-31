import { IOrder } from '@/types/types'

import styles from './DeleteOrderInfo.module.scss'

interface Props {
  order?: IOrder
}

const DeleteOrderInfo: React.FC<Props> = ({ order }) => {
  return (
    <div className={styles.container}>
      <p>{order?.title}</p>
    </div>
  )
}

export default DeleteOrderInfo
