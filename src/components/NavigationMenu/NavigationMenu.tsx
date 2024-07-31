'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './NavigationMenu.module.scss'

const NavigationMenu = () => {
  const pathname = usePathname()

  return (
    <div className={styles.container}>
      <nav className={styles.links}>
        <img src="/avatar.png" className={styles.avatar} alt="avatar" />
        <Link href="/products" className={styles.link}>
          <p
            className={
              pathname === '/products' || pathname === '/' ? styles.active : ''
            }>
            Products
          </p>
        </Link>
        <Link href="/orders" className={styles.link}>
          <p className={pathname === '/orders' ? styles.active : ''}>Orders</p>
        </Link>
      </nav>
    </div>
  )
}

export default NavigationMenu