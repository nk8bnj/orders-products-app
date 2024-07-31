'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'

import NavigationMenu from '@/components/NavigationMenu/NavigationMenu'
import TopMenu from '@/components/TopMenu/TopMenu'
import store from '@/store/store'

import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <TopMenu />
          <div className="d-flex">
            <NavigationMenu />
            <div className={styles.main}>{children}</div>
          </div>
        </Provider>
      </body>
    </html>
  )
}
